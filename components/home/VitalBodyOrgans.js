import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from './VitalBodyOrgans.module.css';

export default function VitalBodyOrgans({ organsData }) {
  const router = useRouter();

  if (!organsData?.vitalOrgans?.[0]) return null;

  const { title, description, all_test_categories } = organsData.vitalOrgans[0];

  const handleCategoryClick = (category) => {
    // Route to the specific test category page
    router.push(`/bangalore/${category.path}`);
  };

  const handleViewAllClick = () => {
    // Route to the all tests page
    router.push('/bangalore/all-tests');
  };

  return (
    <section className={styles.vitalOrgans}>
      <div className={styles.content}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title || 'Non Lab test Categories'}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        {/* <motion.button 
          className={styles.viewAllBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewAllClick}
        >
          View All Tests
        </motion.button> */}
      </div>
      
      <motion.div
        className={styles.organsGrid}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {all_test_categories?.map((category) => (
          <motion.div
            key={category._id}
            className={styles.iconWrapper}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleCategoryClick(category)}
          >
            <div className={styles.iconBackground}>
              <Image
                src={category.image}
                alt={category.name}
                width={48}
                height={48}
                className={styles.icon}
              />
            </div>
            <span>{category.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}