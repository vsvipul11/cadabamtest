import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaFlask, FaClock, FaCheck } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
import styles from './CheckupsSlider.module.css';

const CheckupCard = ({ test }) => {
  const router = useRouter();
  const { addToCart, cartItems } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const basicInfo = test?.alldata?.[0]?.basic_info;

  // Check if item is already in cart
  const isInCart = cartItems?.some(item => item.id === test._id);

  const handleAddToCart = () => {
    const cartItem = {
      id: test._id,
      title: basicInfo?.name,
      discountedPrice: basicInfo?.discountedPrice,
      price: basicInfo?.price
    };
    addToCart(cartItem);
    setIsAdded(true);
  };

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.cardHeader}>
        <h3>{basicInfo?.name}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>₹{basicInfo?.price}</span>
          <span className={styles.discountedPrice}>₹{basicInfo?.discountedPrice}</span>
        </div>
        <span className={styles.discount}>{basicInfo?.discount}% Off</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.infoItem}>
          <FaFlask className={styles.icon} />
          <span>91 parameters included</span>
        </div>
        <div className={styles.infoItem}>
          <FaClock className={styles.icon} />
          <span>Reports {basicInfo?.reportsWithin}</span>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <motion.button
          className={styles.viewDetailsBtn}
          onClick={() => router.push(`/bangalore/lab-test${basicInfo?.route}`)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Details
        </motion.button>
        <motion.button 
          className={`${styles.addToCartBtn} ${(isAdded || isInCart) ? styles.added : ''}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          disabled={isAdded || isInCart}
        >
          {(isAdded || isInCart) ? (
            <>
              <FaCheck className={styles.checkIcon} />
              Added
            </>
          ) : (
            'Add to Cart'
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function CheckupsSection({ test_card }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const tests = test_card?.tests || [];
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(tests.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleTests = tests.slice(
    currentSlide * cardsPerSlide,
    (currentSlide * cardsPerSlide) + cardsPerSlide
  );

  return (
    <section className={styles.checkupsSection}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {test_card?.title || 'Vital Health Tests'}
      </motion.h2>
      <div className={styles.sliderContainer}>
        <motion.button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft />
        </motion.button>

        <div className={styles.cardsContainer}>
          {visibleTests.map((test) => (
            <CheckupCard key={test._id} test={test} />
          ))}
        </div>

        <motion.button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight />
        </motion.button>
      </div>

      <div className={styles.pagination}>
        {currentSlide + 1}/{totalSlides}
      </div>
      <div className={styles.dots}>
        {[...Array(totalSlides)].map((_, index) => (
          <motion.span
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            initial={{ scale: 1 }}
            animate={{ scale: index === currentSlide ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
}