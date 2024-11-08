import React from 'react';
import styles from './CategoryOverview.module.css';

const CategoryOverview = ({ category }) => {
  if (!category) return null;

  const {
    name = '',
    description = '',
    image = 'https://cadabams-diagnostics-assets.s3.ap-south-1.amazonaws.com/cadabam_assets/compressed_9815643070a25aed251f2c91def2899b.png'
  } = category;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.leftContent}>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.subtitle}>Category Overview</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.rightContent}>
          <img
            src={image}
            alt={name || "Lab Test"}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryOverview;