import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '../../contexts/AuthContext';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/BlogPost.module.css';

// ImageWithFallback component that hides completely on error
const ImageWithFallback = ({ src, alt, width, height }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
      onError={() => setImageError(true)}
      className="rounded-lg"
    />
  );
};

const RecentBlogCard = ({ title, date }) => (
  <motion.div   
    className={styles.recentBlogCard}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <h4>{title}</h4>
    <p>{date}</p>
  </motion.div>
);

const CategoryCard = ({ categories = [] }) => (
  <div className={styles.categoryCard}>
    <h3>Categories</h3>
    <ul>
      {categories.map((category, index) => (
        <motion.li 
          key={index}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {category}
        </motion.li>
      ))}
    </ul>
  </div>
);

const ContactForm = () => (
  <form className={styles.contactForm}>
    <h3>Get in Touch</h3>
    <input type="text" placeholder="Name" required />
    <input type="email" placeholder="Email" required />
    <textarea placeholder="Message" required></textarea>
    <motion.button 
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Send
    </motion.button>
  </form>
);

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || !faqs.length) return null;

  let parsedFaqs = [];
  try {
    parsedFaqs = JSON.parse(faqs[0]);
  } catch (error) {
    console.error('Error parsing FAQs:', error);
    return null;
  }

  return (
    <motion.div 
      className={styles.faqSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {parsedFaqs.map((faq, index) => (
          <motion.div 
            key={index}
            className={styles.faqItem}
            initial={false}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={styles.questionText}>{faq.question}</span>
              <span className={`${styles.toggleIcon} ${openIndex === index ? styles.active : ''}`}>
                +
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.faqAnswer}
                >
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function BlogPost() {
  const [blogData, setBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetchBlogPost(slug);
    }
  }, [slug]);

  const fetchBlogPost = async (slug) => {
    try {
      const response = await fetch(`https://cadabamsapi.exar.ai/api/v1/cms/blog/${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      const data = await response.json();
      data.content = data.content?.replace(/['"]/g, '') || '';
      setBlogData(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <AuthProvider>
        <Layout title="Loading Blog Post...">
          <div className={styles.loadingContainer}>
            <h2>Loading blog post...</h2>
          </div>
        </Layout>
      </AuthProvider>
    );
  }

  if (error) {
    return (
      <AuthProvider>
        <Layout title="Error">
          <div className={styles.errorContainer}>
            <h2>Error: {error}</h2>
            <button onClick={() => fetchBlogPost(slug)}>Try Again</button>
          </div>
        </Layout>
      </AuthProvider>
    );
  }

  if (!blogData) {
    return null;
  }

  return (
    <AuthProvider>
      <Layout title={blogData.title || 'Blog Post'}>
        <motion.div 
          className={styles.blogPostContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <main className={styles.mainContent}>
            {blogData.imageUrl && (
              <ImageWithFallback
                src={blogData.imageUrl}
                alt={blogData.title || 'Blog post image'}
                width={800}
                height={400}
              />
            )}
            <motion.h1 
              className={styles.blogTitle}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {blogData.title || 'Untitled Post'}
            </motion.h1>
            <motion.p 
              className={styles.blogAuthor}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {blogData.verifiedBy ? `Verified by: ${blogData.verifiedBy}` : ''}
            </motion.p>
            <motion.div 
              className={styles.blogContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              dangerouslySetInnerHTML={{ __html: blogData.content || '' }}
            />
            <FAQSection faqs={blogData.faqs} />
          </main>
          
          <aside className={styles.sidebar}>
            <motion.div 
              className={styles.recentBlogs}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3>Recent Blogs</h3>
              <RecentBlogCard title="Sample Recent Blog" date="May 15, 2023" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CategoryCard categories={[blogData.categoryName].filter(Boolean)} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <ContactForm />
            </motion.div>
          </aside>
        </motion.div>
      </Layout>
    </AuthProvider>
  );
}