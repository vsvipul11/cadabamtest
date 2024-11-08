import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaFlask, FaClock, FaShieldAlt } from 'react-icons/fa';
import styles from './HealthCheckupSlider.module.css';

export default function HealthCheckupSlider({ healthData }) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const content = healthData?.content || [];
  const totalSlides = content.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleViewDetails = () => {
    const currentContent = content[currentSlide];
    const route = currentContent?.test?.alldata?.[0]?.basic_info?.route;
    if (route) {
      router.push(`/bangalore/labtest${route}`);
    }
  };

  if (!content[currentSlide]) return null;

  const currentContent = content[currentSlide];

  return (
    <section className={styles.healthCheckupSlider}>
      <div className={styles.sliderSection}>
        <div className={styles.sliderContainer}>
          <motion.button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </motion.button>

          <div className={styles.content}>
            <div className={styles.checkupCard}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className={styles.card}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.checkupLabel}>Checkup</span>
                    <h3>{currentContent?.test?.alldata?.[0]?.basic_info?.name}</h3>
                    <div className={styles.priceContainer}>
                      <span className={styles.originalPrice}>
                        ₹{currentContent?.test?.alldata?.[0]?.basic_info?.price}
                      </span>
                      <span className={styles.discountedPrice}>
                        ₹{currentContent?.test?.alldata?.[0]?.basic_info?.discountedPrice}
                      </span>
                      <span className={styles.discount}>
                        {currentContent?.test?.alldata?.[0]?.basic_info?.discount}% Off
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.infoItem}>
                      <FaFlask className={styles.icon} />
                      <span>107 parameters included</span>
                    </div>
                    <div className={styles.infoItem}>
                      <FaClock className={styles.icon} />
                      <span>Reports {currentContent?.test?.alldata?.[0]?.basic_info?.reportsWithin}</span>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <motion.button
                      className={styles.viewDetailsBtn}
                      onClick={handleViewDetails}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                    <motion.button
                      className={styles.addToCartBtn}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className={styles.description}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentContent.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {currentContent.description}
              </motion.p>
              <motion.div
                className={styles.trustedBy}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaShieldAlt className={styles.trustIcon} />
                <span>Trusted by {currentContent.trustedBy}</span>
              </motion.div>
            </div>

            <div className={styles.imageContainer}>
              {currentContent?.imageSrc && (
                <Image
                  src={currentContent.imageSrc}
                  alt="Health Checkup"
                  width={350}
                  height={400}
                  className={styles.image}
                  priority
                />
              )}
            </div>
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
      </div>
    </section>
  );
}