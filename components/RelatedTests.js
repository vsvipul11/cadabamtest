import React from 'react';
import { useRouter } from 'next/router';
import DOMPurify from 'dompurify';
import styles from './RelatedTests.module.css';

const RelatedTests = ({ tests, currentCategory }) => {
  const router = useRouter();

  if (!tests || tests.length === 0) return null;

  const TestCard = ({ test }) => {
    const basicInfo = test.alldata?.[0]?.basic_info || {};
    const aboutTest = test.alldata?.find(item => item.about_test)?.about_test || {};

    const getDiscountedPrice = (price, discount) => {
      if (!price || !discount) return price;
      const discounted = price - (price * (parseFloat(discount) / 100));
      return discounted.toFixed(2);
    };

    const handleViewDetails = () => {
      router.push(`/bangalore/${currentCategory}${test.route}`);
    };

    const handleAddToCart = (e) => {
      e.stopPropagation();
      // Add to cart logic here
      console.log('Added to cart:', test.testName);
    };

    return (
      <div className={styles.card}>
        {aboutTest?.imageSrc && (
          <div className={styles.imageContainer}>
            <img
              src={aboutTest.imageSrc}
              alt={basicInfo.name || 'Test image'}
              className={styles.image}
            />
          </div>
        )}
        
        <div className={styles.cardContent}>
          <h3 className={styles.testName}>{basicInfo.name}</h3>
          
          {aboutTest?.desc && (
            <div 
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(aboutTest.desc).slice(0, 100) + '...'
              }}
            />
          )}
          
          <div className={styles.priceSection}>
            {basicInfo.price && (
              <>
                <div className={styles.prices}>
                  <span className={styles.discountedPrice}>
                    ₹{basicInfo.discountedPrice || getDiscountedPrice(basicInfo.price, basicInfo.discount)}
                  </span>
                  <span className={styles.originalPrice}>
                    ₹{basicInfo.price}
                  </span>
                  {basicInfo.discount && (
                    <span className={styles.discount}>{basicInfo.discount}% OFF</span>
                  )}
                </div>
                {basicInfo.reportsWithin && (
                  <div className={styles.reportTime}>
                    Results in: {basicInfo.reportsWithin}
                  </div>
                )}
              </>
            )}
          </div>
          
          <div className={styles.actions}>
            <button 
              className={styles.viewButton}
              onClick={handleViewDetails}
            >
              View Details
            </button>
            <button 
              className={styles.cartButton}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Related Tests</h2>
      <div className={styles.grid}>
        {tests.map((test) => (
          <TestCard key={test._id} test={test} />
        ))}
      </div>
    </div>
  );
};

export default RelatedTests;