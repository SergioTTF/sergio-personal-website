import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className='row'>
          <h2>About me</h2>
        </div>
        <div className='row'>
          <p>I'm a developer passionate about leveraging technology to enhance our daily lives.</p>
        </div>
        <div className="row">
          <p>💻 Currently working as Software Engineer @  {' '}<a
        href="https://inter.co"
        target="_blank"  // Optional: Opens the link in a new tab
        rel="noopener noreferrer"  // Recommended for security when using target="_blank"
        style={{ color: '#ff8700', fontWeight: 'bold' }}
      >
        Inter
      </a>.
      </p>
        </div>
        <div className="row">
          <p>Most of my professional experience consists of Back-end development using Java and Microservices architecture.</p>
        </div>
        <div className="row">
          <p>🎓 Graduated with a Bachelor's degree in Computer Science at {' '}<a
        href="https://www.ufpe.br/"
        target="_blank"  // Optional: Opens the link in a new tab
        rel="noopener noreferrer"  // Recommended for security when using target="_blank"
        style={{ color: '#990000', fontWeight: 'bold' }}
      >
        Federal University of Pernambuco(UFPE)
      </a>.
      </p>
        </div>
      </div>
    </section>
  );
}
