import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import styles from './BlogSection.module.css';

const BlogSection = ({ insights = [] }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

  const generateSlug = (title) => {
    if (!title) return '';
    return title.toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  };

  if (!insights || insights.length === 0) {
    return null;
  }

  return (
    <div className={styles.blogSection}>
      <h2 className={styles.sectionTitle}>Health Insights</h2>
      <p className={styles.sectionDescription}>
        Stay informed with our latest health articles and medical insights
      </p>

      <div className={styles.blogGrid}>
        {insights.map((blog, index) => (
          <div 
            key={blog._id || index} 
            className={styles.blogCard}
          >
            <div className={styles.blogContent}>
              <h3 className={styles.blogTitle}>
                {blog.title}
              </h3>

              <p className={styles.excerpt}>
                {blog.description}
              </p>

              <div className={styles.blogMeta}>
                <div className={styles.metaItem}>
                  <FaCalendarAlt className={styles.metaIcon} />
                  <span>{formatDate(blog.date)}</span>
                </div>
                {blog.author && (
                  <div className={styles.metaItem}>
                    <FaUser className={styles.metaIcon} />
                    <span>{blog.author}</span>
                  </div>
                )}
              </div>

              {blog.title && (
                <Link 
                  href={`/blog/${generateSlug(blog.title)}`}
                  className={styles.readMore}
                >
                  Read More <FaArrowRight className={styles.arrowIcon} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.viewAllWrapper}>
        <Link href="/blog" className={styles.viewAllButton}>
          View All Articles
        </Link>
      </div>
    </div>
  );
};

BlogSection.propTypes = {
  insights: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      author: PropTypes.string,
      date: PropTypes.string
    })
  )
};

BlogSection.defaultProps = {
  insights: []
};

export default React.memo(BlogSection);