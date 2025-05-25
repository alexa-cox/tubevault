import React from 'react';
import styles from './showcase.module.css';

const ShowcaseSection = () => {
  return (
    <>
      {' '}
      <section
        className='showcase'
        id='how-it-works'
      >
        <div className={styles.showcaseContent}>
          <div className={styles.showcaseText}>
            <h2>Your Videos, Your Way</h2>
            <p>
              FocusView gives you a clean, customizable dashboard to organize
              your YouTube viewing experience. No more falling down rabbit holes
              of recommended videos.
            </p>
            <p>
              Simply save videos you want to watch later, categorize them how
              you like, and enjoy a focused viewing experience without YouTube's
              endless distractions.
            </p>
            <button className='btn-primary'>See It in Action</button>
          </div>
          <div className={styles.showcaseImg}>
            [IMAGE: Screenshot of the categorized gallery view with custom
            playlists]
          </div>
        </div>
      </section>
      <section className={styles.showcase}>
        <div className={styles.showcaseContent}>
          <div className={styles.showcaseImg}>
            [IMAGE: Screenshot of the video player showing a clean interface
            with no distractions]
          </div>
          <div className={styles.showcaseText}>
            <h2>Watch Without Distractions</h2>
            <p>
              Our clean player interface lets you focus on the content you
              actually want to watch. No more getting sidetracked by
              recommendations, shorts, or comment sections.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='btn-primary'>Try It Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowcaseSection;
