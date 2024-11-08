import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaPhone, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './BookingForm.module.css';

const BookingForm = ({ centerInfo, workingHours }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    location: centerInfo.address || ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate time slots based on working hours
  const generateTimeSlots = () => {
    const slots = [];
    const start = parseInt(workingHours.weekdays.start.split(':')[0]);
    const end = parseInt(workingHours.weekdays.end.split(':')[0]);
    
    for (let hour = start; hour < end; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    if (!formData.time) {
      newErrors.time = 'Time slot is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // API call would go here
        console.log('Form submitted:', formData);
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: '',
          location: centerInfo.address || ''
        });
        // Show success message
      } catch (error) {
        console.error('Submission error:', error);
        // Handle error
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Get minimum date (today) for date picker
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get maximum date (30 days from today) for date picker
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Book Home Collection</h3>
        <p className={styles.formSubtitle}>Free home sample collection</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <FaUser className={styles.inputIcon} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
            disabled={isSubmitting}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.inputGroup}>
          <FaPhone className={styles.inputIcon} />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`${styles.input} ${errors.phone ? styles.errorInput : ''}`}
            disabled={isSubmitting}
          />
          {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
        </div>

        <div className={styles.inputGroup}>
          <FaCalendarAlt className={styles.inputIcon} />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={getMinDate()}
            max={getMaxDate()}
            className={`${styles.input} ${errors.date ? styles.errorInput : ''}`}
            disabled={isSubmitting}
          />
          {errors.date && <span className={styles.errorText}>{errors.date}</span>}
        </div>

        <div className={styles.inputGroup}>
          <FaClock className={styles.inputIcon} />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`${styles.input} ${errors.time ? styles.errorInput : ''}`}
            disabled={isSubmitting}
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && <span className={styles.errorText}>{errors.time}</span>}
        </div>

        <div className={styles.inputGroup}>
          <FaMapMarkerAlt className={styles.inputIcon} />
          <input
            type="text"
            name="location"
            placeholder="Collection Address"
            value={formData.location}
            onChange={handleChange}
            className={styles.input}
            disabled={isSubmitting}
          />
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Booking...' : 'Book Now'}
        </button>

        <div className={styles.info}>
          <p className={styles.infoText}>✓ NABL Accredited Labs</p>
          <p className={styles.infoText}>✓ Get reports within 24 hours</p>
        </div>
      </form>
    </div>
  );
};

BookingForm.propTypes = {
  centerInfo: PropTypes.shape({
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    map_location: PropTypes.string.isRequired
  }).isRequired,
  workingHours: PropTypes.shape({
    weekdays: PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired
    }).isRequired,
    sunday: PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default React.memo(BookingForm);