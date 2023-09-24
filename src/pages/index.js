import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import styles from './index.module.css';
import SocialMedias from '../components/SocialMedias';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <Box sx={{ display: 'flex' }}>
          <Box m="auto">
            <Avatar
              alt="Sergio Teixeira"
              src={useBaseUrl('/img/profile-picture.png')}
              sx={{ width: 150, height: 150, m: 2 }}
            />
          </Box>
        </Box>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <SocialMedias></SocialMedias>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="Blog homepage">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
