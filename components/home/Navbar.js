import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import AuthModal from './AuthModal';
import styles from './Navbar.module.css';
import layoutStyles from '../Layout.module.css';
import { 
  FaFlask, 
  FaUserMd, 
  FaShoppingCart, 
  FaSignInAlt, 
  FaSignOutAlt, 
  FaSearch, 
  FaBars, 
  FaTimes, 
  FaMapMarkerAlt, 
  FaChevronDown, 
  FaClinicMedical, 
  FaBlog 
} from 'react-icons/fa';

const locations = [
  { name: 'All Bangalore', value: 'bangalore' },
  { name: 'Indiranagar', value: 'bangalore/indiranagar' },
  { name: 'Koramangala', value: 'bangalore/koramangala' },
  { name: 'Whitefield', value: 'bangalore/whitefield' },
  { name: 'Electronic City', value: 'bangalore/electronic-city' },
];

const radiologyOptions = [
  { name: 'XRay', path: '/bangalore/xray' },
  { name: 'MRI', path: '/bangalore/mri' },
  { name: 'CT Scan', path: '/bangalore/ct-scan' },
  { name: 'Ultrasound', path: '/bangalore/ultrasound' },
  { name: 'Preventive health checks', path: '/bangalore/preventive-health-checks' },
  { name: 'Pregnancy scans', path: '/bangalore/pregnancy-scans' },
  { name: 'MSK Scans', path: '/bangalore/msk-scans' },
];

const centerOptions = [
  { name: 'Indiranagar', path: '/bangalore/center/indiranagar' },
  { name: 'Banashankari', path: '/bangalore/center/banashankari' },
  { name: 'Jayanagar', path: '/bangalore/center/jayanagar' },
  { name: 'Kalyan Nagar', path: '/bangalore/center/kalyannagar' },
  { name: 'Kanakapura Road', path: '/bangalore/center/kanakapura' },
];

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRadiologyDropdownOpen, setIsRadiologyDropdownOpen] = useState(false);
  const [isCentersDropdownOpen, setIsCentersDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { cart } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath.split('/');
    const currentLocation = locations.find(loc => loc.value === `${path[1]}/${path[2]}`) || 
                          locations.find(loc => loc.value === path[1]) || 
                          locations[0];
    setSelectedLocation(currentLocation);
  }, [router.asPath]);

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
    } else {
      setIsAuthModalOpen(true);
    }
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsRadiologyDropdownOpen(false);
      setIsCentersDropdownOpen(false);
    }
  };

  const handleLocationChange = (e) => {
    const newLocation = locations.find(loc => loc.value === e.target.value);
    setSelectedLocation(newLocation);
    router.push(`/${newLocation.value}`);
  };

  const toggleRadiologyDropdown = () => {
    setIsRadiologyDropdownOpen(!isRadiologyDropdownOpen);
    setIsCentersDropdownOpen(false);
  };

  const toggleCentersDropdown = () => {
    setIsCentersDropdownOpen(!isCentersDropdownOpen);
    setIsRadiologyDropdownOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const CartComponent = () => (
    <div className={styles.cartWrapper}>
      <FaShoppingCart />
      {cart.length > 0 && (
        <span className={styles.cartCount}>{cart.length}</span>
      )}
    </div>
  );

  const MobileSearch = () => (
    <div className={`${styles.mobileSearch} ${isSearchVisible ? styles.visible : ''}`}>
      <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
        <FaSearch className={styles.mobileSearchIcon} />
        <input
          type="text"
          placeholder="Search tests or checkups"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.mobileSearchInput}
        />
      </form>
      <div className={styles.discountBanner}>
        Get <span className={styles.highlight}>15% OFF*</span> | Use code: <span className={styles.highlight}>ORANGE15</span>
      </div>
    </div>
  );

  const RadiologyDropdown = () => (
    <div className={`${styles.radiologyDropdown} ${isRadiologyDropdownOpen ? styles.active : ''}`}>
      <div 
        className={`${styles.radiologyButton} ${isRadiologyDropdownOpen ? styles.active : ''}`}
        onClick={toggleRadiologyDropdown}
      >
        <FaUserMd />
        <span>Radiology</span>
        <FaChevronDown className={`${styles.dropdownArrow} ${isRadiologyDropdownOpen ? styles.rotated : ''}`} />
      </div>
      <div className={`${styles.dropdownContent} ${isRadiologyDropdownOpen ? styles.visible : ''}`}>
        {radiologyOptions.map((option) => (
          <Link
            key={option.path}
            href={option.path}
            className={styles.dropdownItem}
            onClick={() => {
              setIsRadiologyDropdownOpen(false);
              setIsMobileMenuOpen(false);
            }}
          >
            {option.name}
          </Link>
        ))}
      </div>
    </div>
  );

  const CentersDropdown = () => (
    <div className={`${styles.centersDropdown} ${isCentersDropdownOpen ? styles.active : ''}`}>
      <div 
        className={`${styles.centersButton} ${isCentersDropdownOpen ? styles.active : ''}`}
        onClick={toggleCentersDropdown}
      >
        <FaClinicMedical />
        <span>Centers</span>
        <FaChevronDown className={`${styles.dropdownArrow} ${isCentersDropdownOpen ? styles.rotated : ''}`} />
      </div>
      <div className={`${styles.dropdownContent} ${isCentersDropdownOpen ? styles.visible : ''}`}>
        {centerOptions.map((option) => (
          <Link
            key={option.path}
            href={option.path}
            className={styles.dropdownItem}
            onClick={() => {
              setIsCentersDropdownOpen(false);
              setIsMobileMenuOpen(false);
            }}
          >
            {option.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav className={`${styles.navbar} ${layoutStyles.zIndexBase}`}>
        <div className={styles.navbarContent}>
          <div className={styles.logoAndLocation}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="https://cadabams-diagnostics-assets.s3.ap-south-1.amazonaws.com/cadabam_assets/image-1728018316689-966136917.png" 
                alt="Cadabams HealthLabs Logo" 
                width={100} 
                height={70} 
                priority
              />
            </Link>
            <div className={styles.locationDropdownWrapper}>
              <div className={styles.locationDropdown}>
                <FaMapMarkerAlt className={styles.locationIcon} />
                <select
                  value={selectedLocation.value}
                  onChange={handleLocationChange}
                  className={styles.locationSelect}
                >
                  {locations.map((location) => (
                    <option key={location.value} value={location.value}>
                      {location.name}
                    </option>
                  ))}
                </select>
                <FaChevronDown className={styles.dropdownArrow} />
              </div>
            </div>
            <button 
              className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`} 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchInputWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search tests or checkups"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </form>

          <div className={styles.desktopNavLinks}>
            <Link href="/bangalore/lab-test" className={styles.navLink}>
              <FaFlask />
              <span>Lab Tests</span>
            </Link>
            <RadiologyDropdown />
            <CentersDropdown />
            <Link href="/blogs" className={styles.navLink}>
              <FaBlog />
              <span>Blogs</span>
            </Link>
            <Link href="/cart" className={styles.navLink}>
              <CartComponent />
              <span>Cart</span>
            </Link>
            <button onClick={handleAuthAction} className={styles.navLink}>
              {isAuthenticated ? (
                <>
                  <FaSignOutAlt />
                  <span>Logout</span>
                </>
              ) : (
                <>
                  <FaSignInAlt />
                  <span>Login</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className={`${styles.mobileNavLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          <Link href="/bangalore/labtest" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            <FaFlask />
            <span>Lab Tests</span>
          </Link>
          <RadiologyDropdown />
          <CentersDropdown />
          <Link href="/bangalore/blogs" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            <FaBlog />
            <span>Blogs</span>
          </Link>
          <Link href="/cart" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
            <CartComponent />
            <span>Cart</span>
          </Link>
          <button onClick={handleAuthAction} className={styles.navLink}>
            {isAuthenticated ? (
              <>
                <FaSignOutAlt />
                <span>Logout</span>
              </>
            ) : (
              <>
                <FaSignInAlt />
                <span>Login</span>
              </>
            )}
          </button>
        </div>
      </nav>

      <MobileSearch />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}