import { useState } from 'react';
import styles from './pricing.module.css';
import classNames from 'classnames';

const PricingSection = () => {
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);

  const toggleBilling = () => {
    setIsAnnualBilling(!isAnnualBilling);
  };

  return (
    <section
      className={styles.pricing}
      id='pricing'
    >
      <div className='sectionTitle'>
        <h2>Simple, Transparent Pricing</h2>
        <p>Choose the plan that works best for you</p>

        {/* Pricing Toggle */}
        <div className={styles.pricingToggle}>
          <span>Monthly</span>
          <label className={styles.switch}>
            <input
              type='checkbox'
              id='billing-toggle'
              checked={isAnnualBilling}
              onChange={toggleBilling}
            />
            <span className={classNames(styles.slider, styles.round)}></span>
          </label>
          <span>
            Annually <span className={styles.saveBadge}>Save 20%</span>
          </span>
        </div>
      </div>

      <div className={styles.pricingContainer}>
        {/* Basic Plan */}
        <div className={styles.pricingCard}>
          <div className={styles.pricingHeader}>
            <h3>Basic</h3>
            <div className={styles.price}>
              <span
                className={styles.priceMonthly}
                style={{ display: isAnnualBilling ? 'none' : 'inline' }}
              >
                $4.99
              </span>
              <span
                className={styles.priceAnnually}
                style={{ display: isAnnualBilling ? 'inline' : 'none' }}
              >
                $3.99
              </span>
              <span className={styles.period}>/month</span>
            </div>
            <p>Perfect for casual viewers</p>
          </div>
          <div className={styles.pricingFeatures}>
            <ul>
              <li>
                <span className={styles.check}>✓</span> Save up to 100 videos
              </li>
              <li>
                <span className={styles.check}>✓</span> 5 categories
              </li>
              <li>
                <span className={styles.check}>✓</span> Basic player
              </li>
              <li>
                <span className={styles.check}>✓</span> Watch history
              </li>
              <li className={styles.disabled}>
                <span className={styles.cross}>✕</span> Playlists
              </li>
              <li className={styles.disabled}>
                <span className={styles.cross}>✕</span> No ads
              </li>
              <li className={styles.disabled}>
                <span className={styles.cross}>✕</span> Advanced filters
              </li>
            </ul>
          </div>
          <button className={styles.pricingButton}>Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className={classNames(styles.pricingCard, styles.popular)}>
          <div className={styles.popularBadge}>Most Popular</div>
          <div className={styles.pricingHeader}>
            <h3>Pro</h3>
            <div className={styles.price}>
              <span
                className={styles.priceMonthly}
                style={{ display: isAnnualBilling ? 'none' : 'inline' }}
              >
                $9.99
              </span>
              <span
                className={styles.priceAnnually}
                style={{ display: isAnnualBilling ? 'inline' : 'none' }}
              >
                $7.99
              </span>
              <span className={styles.period}>/month</span>
            </div>
            <p>For dedicated content enthusiasts</p>
          </div>
          <div className={styles.pricingFeatures}>
            <ul>
              <li>
                <span className={styles.check}>✓</span> Unlimited video saves
              </li>
              <li>
                <span className={styles.check}>✓</span> 20 categories
              </li>
              <li>
                <span className={styles.check}>✓</span> Enhanced player
              </li>
              <li>
                <span className={styles.check}>✓</span> Watch history
              </li>
              <li>
                <span className={styles.check}>✓</span> Unlimited playlists
              </li>
              <li>
                <span className={styles.check}>✓</span> Ad-free experience
              </li>
              <li className={styles.disabled}>
                <span className={styles.cross}>✕</span> Advanced filters
              </li>
            </ul>
          </div>
          <button
            className={classNames(styles.pricingButton, styles.highlighted)}
          >
            Choose Pro
          </button>
        </div>

        {/* Premium Plan */}
        <div className={styles.pricingCard}>
          <div className={styles.pricingHeader}>
            <h3>Premium</h3>
            <div className={styles.price}>
              <span
                className={styles.priceMonthly}
                style={{ display: isAnnualBilling ? 'none' : 'inline' }}
              >
                $14.99
              </span>
              <span
                className={styles.priceAnnually}
                style={{ display: isAnnualBilling ? 'inline' : 'none' }}
              >
                $11.99
              </span>
              <span className={styles.period}>/month</span>
            </div>
            <p>Ultimate viewing experience</p>
          </div>
          <div className={styles.pricingFeatures}>
            <ul>
              <li>
                <span className={styles.check}>✓</span> Unlimited video saves
              </li>
              <li>
                <span className={styles.check}>✓</span> Unlimited categories
              </li>
              <li>
                <span className={styles.check}>✓</span> Premium player
              </li>
              <li>
                <span className={styles.check}>✓</span> Watch history
              </li>
              <li>
                <span className={styles.check}>✓</span> Unlimited playlists
              </li>
              <li>
                <span className={styles.check}>✓</span> Ad-free experience
              </li>
              <li>
                <span className={styles.check}>✓</span> Advanced filters
              </li>
            </ul>
          </div>
          <button className={styles.pricingButton}>Get Premium</button>
        </div>
      </div>

      <div className={styles.pricingNote}>
        <p>
          All plans include a 14-day free trial. No credit card required to
          start.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
