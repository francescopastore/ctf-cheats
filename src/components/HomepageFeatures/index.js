import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/home/undraw_researching.svg').default,
    description: (
      <>
        A collection of tips & tricks about CTF.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/home/undraw_code_thinking.svg').default,
    description: (
      <>
        A collection of tips & tricks about CTF.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/home/undraw_hacker_mind.svg').default,
    description: (
      <>
        A collection of tips & tricks about CTF.
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
