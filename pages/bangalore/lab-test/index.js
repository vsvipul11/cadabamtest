import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthProvider } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import LabtestHero from '@/components/labtest/LabtestHero';
import FeatureSection from '@/components/labtest/FeatureSection';
import CheckupsSection from '@/components/home/CheckupsSection';
import DiscountBanner from '@/components/labtest/DiscountBanner';
import VitalOrgans from '@/components/labtest/VitalOrgans';
import BannerCarousel from '@/components/labtest/BannerCarousel';
import { Loader2 } from 'lucide-react';
import styles from './LabTest.module.css';

const API_BASE_URL = 'https://cadabamsapi.exar.ai/api/v1/cms/component/pagetemplate/labtest';

export default function LabtestPage() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axios.get(API_BASE_URL);
        if (response.data.success) {
          setPageData(response.data.data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching page data:', error);
        setError('Failed to load page data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return (
      <AuthProvider>
        <Layout>
          <div className={styles.loadingContainer}>
            <Loader2 className={styles.loadingSpinner} />
          </div>
        </Layout>
      </AuthProvider>
    );
  }

  if (error) {
    return (
      <AuthProvider>
        <Layout>
          <div className={styles.errorAlert}>{error}</div>
        </Layout>
      </AuthProvider>
    );
  }

  // Get all test sections
  const allTestSections = [];

  // Add popular tests if they exist
  if (pageData?.test_card) {
    allTestSections.push({
      title: pageData.test_card.title,
      tests: pageData.test_card.tests
    });
  }

  // Add tests from multiTestSection
  if (pageData?.multiTestSection) {
    pageData.multiTestSection.forEach(section => {
      if (section.tests?.length > 0) {
        allTestSections.push({
          title: section.title,
          tests: section.tests
        });
      }
    });
  }

  return (
    <AuthProvider>
      <Layout title="Lab Tests - Cadabams Diagnostics">
        <div className={styles.page}>
          <LabtestHero heroData={pageData?.hero} />
          
          <FeatureSection features={pageData?.features} />

          {/* Render test sections */}
          {allTestSections.map((section, index) => (
            <div key={index} className={styles.testSection}>
              <CheckupsSection 
                test_card={{
                  title: section.title,
                  tests: section.tests
                }} 
              />
            </div>
          ))}

          <DiscountBanner
            offer={{
              title: pageData?.discountOffer?.content?.title,
              code: pageData?.discountOffer?.content?.code
            }}
          />

          <VitalOrgans
            organsData={{
              title: pageData?.vitalOrgans?.[0]?.title,
              description: pageData?.vitalOrgans?.[0]?.description,
              all_test_categories: pageData?.vitalOrgans?.[0]?.all_test_categories
            }}
          />

          <BannerCarousel banners={pageData?.banner} />
        </div>
      </Layout>
    </AuthProvider>
  );
}