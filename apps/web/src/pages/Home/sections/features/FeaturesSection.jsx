import React from 'react';
import styles from './features.module.css';
import FeatureCard from './components/FeatureCard';
import { FEATURES } from '../../data/homeConstants';
import { APP_NAME } from '../../../../utils/appConstants';

const FeaturesSection = ({ CTA }) => {
  return (
    <section
      className={styles.features}
      id='features'
    >
      <div className='sectionTitle'>
        <h2>Grab the Remote to Your YouTube Experience</h2>
        <p>
          Ever opened YouTube to watch a simple video on making matcha milk tea
          and four hours later you're learning "how to emotionally release
          childhood trauma with this 5-minute stretch"? {APP_NAME} puts the
          remote back in your hands.
        </p>
      </div>

      <div className={styles.featureGrid}>
        {FEATURES.map((feature, index) => {
          const IconComponent = feature.iconComponent;

          return (
            <FeatureCard
              key={index}
              styles={styles}
              title={feature.title}
              description={feature.description}
              icon={<IconComponent {...feature.iconProps} />}
            />
          );
        })}
      </div>
      <div className='sectionTitle'>
        <h2>Stop Hunting Through Your Watch History</h2>
        <button className='btn-primary'>{CTA}</button>
      </div>
    </section>
  );
};

export default FeaturesSection;
