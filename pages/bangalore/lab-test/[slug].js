import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import TestPage from '../../../components/TestPage';
import NotFound from '../../../components/NotFound';
import { fetchTestData } from '../../../utils/api';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [testData, setTestData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      fetchTestData(slug)
        .then((response) => {
          if (response) {
            console.log(response);
            setTestData(response);
          } else {
            throw new Error('Invalid data structure');
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching data:', err);
          setError('Failed to fetch data');
          setIsLoading(false);
        });
    }
  }, [slug]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!testData) return <NotFound />;

  return (
    <Layout title={testData.testName || 'Test Page'}>
      <TestPage testData={testData} />
    </Layout>
  );
}
