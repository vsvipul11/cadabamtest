import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaUserMd, FaHeartbeat, FaAllergies, FaThermometerHalf } from 'react-icons/fa';
import styles from './MostBooked.module.css';

const CheckupCard = ({ title, Icon, color, size }) => (
  <motion.div
    className={`${styles.card} ${styles[color]} ${styles[size]}`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className={styles.cardContent}>
      <Icon className={styles.icon} />
      <h3>{title}</h3>
    </div>
    <FaChevronRight className={styles.arrow} />
  </motion.div>
);

const iconMap = {
  'Full Body Checkup': FaUserMd,
  'Sexual Health': FaHeartbeat,
  'Allergy Checkup': FaAllergies,
  'Fever Checkup': FaThermometerHalf,
};

export default function MostBooked({ mostBookedData }) {
  if (!mostBookedData) return null;

  const { title, description, checkups } = mostBookedData;

  return (
    <section className={styles.mostBooked}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <motion.button 
          className={styles.viewAllBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Checkups
        </motion.button>
      </div>
      <div className={styles.cardsContainer}>
        {checkups?.map((checkup, index) => (
          <CheckupCard
            key={checkup._id}
            title={checkup.title}
            Icon={iconMap[checkup.title] || FaUserMd}
            color={index % 2 === 0 ? "red" : "blue"}
            size={index === 0 ? "large" : index === 3 ? "medium" : "small"}
          />
        ))}
      </div>
    </section>
  );
}

//