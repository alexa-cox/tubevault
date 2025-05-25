import React from 'react';
import styles from './testimonial.module.css';
import classNames from 'classnames';

const TestimonialSection = () => {
  return (
    <section className={styles.testimonials}>
      <div className={classNames('sectionTitle', styles.testimonialTitle)}>
        <h2>What Our Users Say</h2>
        <p>Join thousands who've reclaimed their viewing experience</p>
      </div>

      <div className={styles.testimonialGrid}>
        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>
            "I used to waste hours going from one recommended video to another.
            With FocusView, I only watch what I intentionally save, and my
            productivity has skyrocketed!"
          </p>
          <div className={styles.testimonialAuthor}>
            <div className={styles.authorImg}>[Photo]</div>
            <div>
              <h4>Sarah Johnson</h4>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>

        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>
            "As a teacher, I use FocusView to organize educational videos for my
            classes. The categorization feature is a game-changer for my
            curriculum planning."
          </p>
          <div className={styles.testimonialAuthor}>
            <div className={styles.authorImg}>[Photo]</div>
            <div>
              <h4>Michael Rodriguez</h4>
              <p>High School Teacher</p>
            </div>
          </div>
        </div>

        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>
            "I can finally keep track of all those DIY videos I save but never
            watch! The playlist feature lets me organize projects by room or
            priority."
          </p>
          <div className={styles.testimonialAuthor}>
            <div className={styles.authorImg}>[Photo]</div>
            <div>
              <h4>Lisa Chen</h4>
              <p>Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
