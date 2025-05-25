import React from 'react';
import styles from './cta.module.css';

const CtaSection = ({ CTA }) => {
  return (
    <section className={styles.cta}>
      <h2>Ready to Be the Master of Your Remote?</h2>
      <p>
        The average person will spend 8 years of their life watching videos
        online. Shouldn't that be shows YOU actually chose to put on?{' '}
      </p>
      <p>
        TubeVault helps you enjoy the content you love without the algorithm
        changing the channel to random shorts and recommendations.
      </p>
      <button className='btn-primary'>{CTA}</button>
      <small>
        No credit card required. See the difference in just one week.
      </small>
    </section>
  );
};

export default CtaSection;
