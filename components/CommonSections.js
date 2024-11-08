import React from 'react';
import styles from './CommonSections.module.css';

export default function CommonSections() {
  return (
    <div className={styles.commonSections}>
      <section className={styles.section}>
        <h2>Free CBC test Home Collection in Bangalore</h2>
        <p>With Cadabam's Diagnostics, the CBC test has never been this easy. We offer free home sample collection across Bengaluru and have more than 70 collection points for fast and reliable services.</p>
      </section>
      <section className={styles.section}>
        <h2>Why Choose Cadabam's Diagnostic Centre?</h2>
        <p>Cadabam's Diagnostics is among the top diagnostic centres in Bengaluru offering expert care and is equipped with some of the best and most advanced diagnostic technologies like 3-Tesla MRI.</p>
        <p>Our comprehensive range of tests, including CBC, ensures accurate and timely results. With a focus on patient convenience, we provide free home sample collection services, ensuring a seamless experience.</p>
      </section>
    </div>
  );
}