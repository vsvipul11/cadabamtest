import React from 'react';
import styles from './LocationPopup.module.css';

const bangaloreAreas = ['Indiranagar', 'Koramangala', 'Whitefield', 'Jayanagar'];

export default function LocationPopup({ onSelect }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2 className={styles.title}>Select Your Location in Bangalore</h2>
        <div className={styles.areaGrid}>
          <button 
            className={`${styles.areaButton} ${styles.allAreas}`}
            onClick={() => onSelect(null)}
          >
            <span className={styles.icon}>🏙️</span>
            Bangalore (All Areas)
          </button>
          {bangaloreAreas.map((area) => (
            <button 
              key={area} 
              className={styles.areaButton}
              onClick={() => onSelect(area)}
            >
              <span className={styles.icon}>📍</span>
              {area}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}