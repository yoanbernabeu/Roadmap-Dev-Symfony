import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Une Roadmap ?',
    Svg: require('../../static/img/map.svg').default,
    description: (
      <>
        Une Roadmap est une proposition de "cursus" ou de "parcours" à suivre afin d'arriver à un objectif.
        Cette Roadmap à été construite de manière collaborative.
      </>
    ),
  },
  {
    title: 'Etape par étape !',
    Svg: require('../../static/img/step.svg').default,
    description: (
      <>
        L'objectif de notre Roadmap est de vous proposer des étapes qui vous permettent d'atteindre progressivement votre objectif.
      </>
    ),
  },
  {
    title: 'Devient un⸱e dev Symfony !',
    Svg: require('../../static/img/dev.svg').default,
    description: (
      <>
        Avec cette Roadmap vous devriez etre en mesure de devenir un développeur Symfony avec toutes les bases necessaire pour concevoir des applications complèxes !
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
