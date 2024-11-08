import { useState, useEffect } from 'react';
import styles from './BannerCarousel.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BannerCarousel = ({ banners = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselContainer}>
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className={`${styles.navButton} ${styles.prevButton}`}>
          <ChevronLeft className={styles.navIcon} />
        </button>
        <button onClick={nextSlide} className={`${styles.navButton} ${styles.nextButton}`}>
          <ChevronRight className={styles.navIcon} />
        </button>

        {/* Slides */}
        <div
          className={styles.sliderWrapper}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className={styles.slideImage}
              />
              <div className={styles.overlay}>
                <button className={styles.bookButton}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className={styles.pagination}>
          {banners.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;