import { motion } from 'framer-motion';
import styles from './MultiTestSection.module.css';

export default function MultiTestSection({ sections }) {
  if (!sections) return null;

  return (
    <section className={styles.multiTest}>
      <div className={styles.container}>
        {sections.map((section, index) => (
          <motion.div
            key={section._id}
            className={styles.testSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.testCategory}>
              <h3 className={styles.categoryName}>{section.testCatIds.name}</h3>
              <p className={styles.description}>{section.testCatIds.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}