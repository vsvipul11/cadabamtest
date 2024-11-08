// components/labtest/LabtestHero.js
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './LabtestHero.module.css';

export default function LabtestHero({ heroData = {} }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.content}>
            <motion.div 
              className={styles.textContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className={styles.title}>
                <span className={styles.highlight}>{heroData?.title || "Blood Test At Home"}</span>
              </h1>
              <h2 className={styles.subtitle}>
                {heroData?.subtitle || "Fast & Reliable Lab Tests"}
              </h2>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Search for lab tests"
                  className={styles.searchInput}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className={styles.searchIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </motion.div>
            <motion.div 
              className={styles.imageContainer}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src={heroData?.imageSrc || "/default-lab-image.jpg"}
                alt="Lab Test"
                width={500}
                height={500}
                className={styles.image}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
