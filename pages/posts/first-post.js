// Import the <Head> component from Next.js to modify the document head (like title, meta tags)
import Head from 'next/head';

// Import the <Link> component from Next.js to enable client-side navigation between pages
import Link from 'next/link';

// Import the <Script> component from Next.js to load third-party scripts efficiently (not used in this file - holdover from part of the tutorial, kept as a personal reminder)
import Script from 'next/script';

// Import the default export (Layout component) from the layout file in the components directory
import Layout from '../../components/layout';
 
// Export a default function called FirstPost, which defines the page component for the first blog post
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}