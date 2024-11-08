import React, { useContext, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import { CreditCard, User, Mail, Phone, MapPin, Crosshair, Home, Hospital } from 'lucide-react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import styles from '../../styles/Checkout.module.css';
import AuthModal from './AuthModal';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 12.9716,
  lng: 77.5946 // Coordinates for Bangalore
};

const libraries = ['places'];

const clinicLocations = [
  {
    id: 1,
    name: 'Cadabam\'s Diagnostics Centre - Banashankari',
    address: 'No. 1/A, Bhavani HBCS, near Devegowda petrol Bunk, 1st Block, Banashankari 3rd Stage, Bengaluru, Karnataka 560070',
    coordinates: {
      lat: 12.9277,
      lng: 77.5476
    }
  },
  {
    id: 2,
    name: 'Cadabams Megsan Diagnostics - Indiranagar',
    address: '725, Chinmaya Mission Hospital Rd, near CHINMAYA MISSION HOSPITAL, Indira Nagar 1st Stage, Defence Colony, Indiranagar, Bengaluru, Karnataka 560038',
    coordinates: {
      lat: 12.9784,
      lng: 77.6408
    }
  }
];

export default function Checkout() {
  const { user, isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
  });
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
  const [map, setMap] = useState(null);
  const searchBoxRef = useRef(null);
  const [collectionMethod, setCollectionMethod] = useState('home');
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [mapMarkers, setMapMarkers] = useState([]);

  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.discountedPrice) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return total + (itemPrice * quantity);
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleMapClick = useCallback((e) => {
    if (collectionMethod === 'home') {
      const newLocation = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      setSelectedLocation(newLocation);
      updateAddress(newLocation);
    }
  }, [collectionMethod]);

  const updateAddress = useCallback((location) => {
    if (map) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location }, (results, status) => {
        if (status === 'OK' && results[0]) {
          setUserDetails(prev => ({ ...prev, address: results[0].formatted_address }));
        }
      });
    }
  }, [map]);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onSearchBoxLoad = useCallback((ref) => {
    searchBoxRef.current = ref;
  }, []);

  const onPlacesChanged = useCallback(() => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const newLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      setSelectedLocation(newLocation);
      setUserDetails(prev => ({ ...prev, address: place.formatted_address }));
      map.panTo(newLocation);
    }
  }, [map]);

  const handleCollectionMethodChange = (method) => {
    setCollectionMethod(method);
    setSelectedClinic(null);
    if (method === 'clinic') {
      // Show all clinic locations on map
      setMapMarkers(clinicLocations.map(clinic => ({
        position: clinic.coordinates,
        title: clinic.name
      })));
      // Center map to show all clinics
      map?.setCenter(defaultCenter);
      map?.setZoom(11);
    } else {
      setMapMarkers([]);
    }
  };

  const handleClinicSelection = (clinic) => {
    setSelectedClinic(clinic);
    setUserDetails(prev => ({ ...prev, address: clinic.address }));
    if (map) {
      map.panTo(clinic.coordinates);
      map.setZoom(15);
    }
  };

  const handleGetUserLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setSelectedLocation(userLocation);
          updateAddress(userLocation);
          map?.panTo(userLocation);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [map, updateAddress]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }

    const order = {
      user: userDetails,
      items: cart,
      total: totalPrice,
      location: selectedLocation,
      collectionMethod,
      clinic: selectedClinic
    };

    console.log('Processing order:', order);
    router.push('/payment');
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutTitle}>Checkout</h1>
      <div className={styles.checkoutContent}>
        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          <div className={styles.formSection}>
            <h2>Personal Details</h2>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                <User size={18} />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                required
                className={styles.whiteInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                <Mail size={18} />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
                className={styles.whiteInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">
                <Phone size={18} />
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                required
                className={styles.whiteInput}
              />
            </div>
          </div>

          <div className={styles.formSection}>
            <h2>Collection Method</h2>
            <div className={styles.collectionMethodContainer}>
              <button
                type="button"
                className={`${styles.collectionMethodButton} ${collectionMethod === 'home' ? styles.active : ''}`}
                onClick={() => handleCollectionMethodChange('home')}
              >
                <Home size={18} />
                Home Collection
              </button>
              <button
                type="button"
                className={`${styles.collectionMethodButton} ${collectionMethod === 'clinic' ? styles.active : ''}`}
                onClick={() => handleCollectionMethodChange('clinic')}
              >
                <Hospital size={18} />
                Visit Clinic
              </button>
            </div>
          </div>

          {collectionMethod === 'home' ? (
            <div className={styles.formSection}>
              <h2>Home Collection Details</h2>
              <div className={styles.formGroup}>
                <label htmlFor="address">
                  <MapPin size={18} />
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  required
                  className={styles.whiteInput}
                />
              </div>
              <div className={styles.mapContainer}>
                <LoadScript 
                  googleMapsApiKey="AIzaSyDt543BUtXayBsSltJ5N4b62QC-FrRIuO8"
                  libraries={libraries}
                >
                  <StandaloneSearchBox
                    onLoad={onSearchBoxLoad}
                    onPlacesChanged={onPlacesChanged}
                  >
                    <input
                      type="text"
                      placeholder="Search for your address"
                      className={styles.searchBox}
                    />
                  </StandaloneSearchBox>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={selectedLocation}
                    zoom={14}
                    onClick={handleMapClick}
                    onLoad={onLoad}
                  >
                    <Marker position={selectedLocation} />
                  </GoogleMap>
                  <button 
                    type="button" 
                    onClick={handleGetUserLocation} 
                    className={styles.locationButton}
                  >
                    <Crosshair size={18} />
                    Use My Location
                  </button>
                </LoadScript>
              </div>
            </div>
          ) : (
            <div className={styles.formSection}>
              <h2>Select Clinic</h2>
              <div className={styles.clinicList}>
                {clinicLocations.map(clinic => (
                  <button
                    key={clinic.id}
                    type="button"
                    className={`${styles.clinicButton} ${selectedClinic?.id === clinic.id ? styles.active : ''}`}
                    onClick={() => handleClinicSelection(clinic)}
                  >
                    <strong>{clinic.name}</strong>
                    <span>{clinic.address}</span>
                  </button>
                ))}
              </div>
              <div className={styles.mapContainer}>
                <LoadScript 
                  googleMapsApiKey="AIzaSyDt543BUtXayBsSltJ5N4b62QC-FrRIuO8"
                  libraries={libraries}
                >
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={selectedClinic?.coordinates || defaultCenter}
                    zoom={11}
                    onLoad={onLoad}
                  >
                    {mapMarkers.map((marker, index) => (
                      <Marker
                        key={index}
                        position={marker.position}
                        title={marker.title}
                      />
                    ))}
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          )}

          <button type="submit" className={styles.checkoutButton}>
            <CreditCard size={18} />
            Proceed to Payment (₹{totalPrice.toFixed(2)})
          </button>
        </form>

        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          <div className={styles.orderItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.orderItem}>
                <span>{item.title}</span>
                <span>₹{parseFloat(item.discountedPrice).toFixed(2)} x {item.quantity || 1}</span>
              </div>
            ))}
          </div>
          <div className={styles.orderTotal}>
            <strong>Total:</strong>
            <strong>₹{totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
}