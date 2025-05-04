import React, { useState } from 'react';
import { DISCLAIMER } from '../../utils/appConstants';
import './home.css';

const Home = () => {
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);
  const [activeFaqItem, setActiveFaqItem] = useState(null);

  const toggleBilling = () => {
    setIsAnnualBilling(!isAnnualBilling);
  };

  const toggleFaqItem = (index) => {
    setActiveFaqItem(activeFaqItem === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className='hero'
        id='hero'
      >
        <h1>Focus on the Videos You Actually Want to Watch</h1>
        <p>
          Your personal, distraction-free YouTube gallery. Save, organize, and
          enjoy videos without algorithm interference.
        </p>
        <button className='cta-button'>Get Started for Free</button>
        <div className='hero-img'>
          [HERO IMAGE: Screenshot of the dashboard showing a clean gallery view
          of saved YouTube videos]
        </div>
      </section>

      {/* Features Section */}
      <section
        className='features'
        id='features'
      >
        <div className='section-title'>
          <h2>Designed for Focus</h2>
          <p>
            Take back control of your viewing experience with these powerful
            features
          </p>
        </div>

        <div className='feature-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>📚</div>
            <h3>Personal Collection</h3>
            <p>
              Save videos to your private collection for easy access anytime.
              Never lose track of that tutorial or documentary again.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>🎯</div>
            <h3>Distraction-Free</h3>
            <p>
              Watch videos without algorithm suggestions, shorts, or other
              attention-grabbing distractions pulling you away.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>🏷️</div>
            <h3>Smart Categories</h3>
            <p>
              Organize videos into custom categories like "Learning",
              "Entertainment", or "Workout" to keep everything structured.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>⭐</div>
            <h3>Favorites</h3>
            <p>
              Mark your top videos as favorites for instant access to your most
              valued content.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>🎵</div>
            <h3>Custom Playlists</h3>
            <p>
              Create and save playlists for different moods, projects, or
              learning journeys.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>🔄</div>
            <h3>Seamless Sync</h3>
            <p>
              Access your collection across all your devices with automatic
              cloud synchronization.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section
        className='showcase'
        id='how-it-works'
      >
        <div className='showcase-content'>
          <div className='showcase-text'>
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
            <button className='cta-button'>See It in Action</button>
          </div>
          <div className='showcase-img'>
            [IMAGE: Screenshot of the categorized gallery view with custom
            playlists]
          </div>
        </div>
      </section>

      <section className='showcase'>
        <div className='showcase-content'>
          <div className='showcase-img'>
            [IMAGE: Screenshot of the video player showing a clean interface
            with no distractions]
          </div>
          <div className='showcase-text'>
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
            <button className='cta-button'>Try It Now</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='testimonials'>
        <div className='section-title'>
          <h2>What Our Users Say</h2>
          <p>Join thousands who've reclaimed their viewing experience</p>
        </div>

        <div className='testimonial-grid'>
          <div className='testimonial-card'>
            <p className='testimonial-text'>
              "I used to waste hours going from one recommended video to
              another. With FocusView, I only watch what I intentionally save,
              and my productivity has skyrocketed!"
            </p>
            <div className='testimonial-author'>
              <div className='author-img'>[Photo]</div>
              <div>
                <h4>Sarah Johnson</h4>
                <p>Graphic Designer</p>
              </div>
            </div>
          </div>

          <div className='testimonial-card'>
            <p className='testimonial-text'>
              "As a teacher, I use FocusView to organize educational videos for
              my classes. The categorization feature is a game-changer for my
              curriculum planning."
            </p>
            <div className='testimonial-author'>
              <div className='author-img'>[Photo]</div>
              <div>
                <h4>Michael Rodriguez</h4>
                <p>High School Teacher</p>
              </div>
            </div>
          </div>

          <div className='testimonial-card'>
            <p className='testimonial-text'>
              "I can finally keep track of all those DIY videos I save but never
              watch! The playlist feature lets me organize projects by room or
              priority."
            </p>
            <div className='testimonial-author'>
              <div className='author-img'>[Photo]</div>
              <div>
                <h4>Lisa Chen</h4>
                <p>Interior Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        className='pricing'
        id='pricing'
      >
        <div className='section-title'>
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that works best for you</p>

          {/* Pricing Toggle */}
          <div className='pricing-toggle'>
            <span>Monthly</span>
            <label className='switch'>
              <input
                type='checkbox'
                id='billing-toggle'
                checked={isAnnualBilling}
                onChange={toggleBilling}
              />
              <span className='slider round'></span>
            </label>
            <span>
              Annually <span className='save-badge'>Save 20%</span>
            </span>
          </div>
        </div>

        <div className='pricing-container'>
          {/* Basic Plan */}
          <div className='pricing-card'>
            <div className='pricing-header'>
              <h3>Basic</h3>
              <div className='price'>
                <span
                  className='price-monthly'
                  style={{ display: isAnnualBilling ? 'none' : 'inline' }}
                >
                  $4.99
                </span>
                <span
                  className='price-annually'
                  style={{ display: isAnnualBilling ? 'inline' : 'none' }}
                >
                  $3.99
                </span>
                <span className='period'>/month</span>
              </div>
              <p>Perfect for casual viewers</p>
            </div>
            <div className='pricing-features'>
              <ul>
                <li>
                  <span className='check'>✓</span> Save up to 100 videos
                </li>
                <li>
                  <span className='check'>✓</span> 5 categories
                </li>
                <li>
                  <span className='check'>✓</span> Basic player
                </li>
                <li>
                  <span className='check'>✓</span> Watch history
                </li>
                <li className='disabled'>
                  <span className='cross'>✕</span> Playlists
                </li>
                <li className='disabled'>
                  <span className='cross'>✕</span> No ads
                </li>
                <li className='disabled'>
                  <span className='cross'>✕</span> Advanced filters
                </li>
              </ul>
            </div>
            <button className='pricing-button'>Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className='pricing-card popular'>
            <div className='popular-badge'>Most Popular</div>
            <div className='pricing-header'>
              <h3>Pro</h3>
              <div className='price'>
                <span
                  className='price-monthly'
                  style={{ display: isAnnualBilling ? 'none' : 'inline' }}
                >
                  $9.99
                </span>
                <span
                  className='price-annually'
                  style={{ display: isAnnualBilling ? 'inline' : 'none' }}
                >
                  $7.99
                </span>
                <span className='period'>/month</span>
              </div>
              <p>For dedicated content enthusiasts</p>
            </div>
            <div className='pricing-features'>
              <ul>
                <li>
                  <span className='check'>✓</span> Unlimited video saves
                </li>
                <li>
                  <span className='check'>✓</span> 20 categories
                </li>
                <li>
                  <span className='check'>✓</span> Enhanced player
                </li>
                <li>
                  <span className='check'>✓</span> Watch history
                </li>
                <li>
                  <span className='check'>✓</span> Unlimited playlists
                </li>
                <li>
                  <span className='check'>✓</span> Ad-free experience
                </li>
                <li className='disabled'>
                  <span className='cross'>✕</span> Advanced filters
                </li>
              </ul>
            </div>
            <button className='pricing-button highlighted'>Choose Pro</button>
          </div>

          {/* Premium Plan */}
          <div className='pricing-card'>
            <div className='pricing-header'>
              <h3>Premium</h3>
              <div className='price'>
                <span
                  className='price-monthly'
                  style={{ display: isAnnualBilling ? 'none' : 'inline' }}
                >
                  $14.99
                </span>
                <span
                  className='price-annually'
                  style={{ display: isAnnualBilling ? 'inline' : 'none' }}
                >
                  $11.99
                </span>
                <span className='period'>/month</span>
              </div>
              <p>Ultimate viewing experience</p>
            </div>
            <div className='pricing-features'>
              <ul>
                <li>
                  <span className='check'>✓</span> Unlimited video saves
                </li>
                <li>
                  <span className='check'>✓</span> Unlimited categories
                </li>
                <li>
                  <span className='check'>✓</span> Premium player
                </li>
                <li>
                  <span className='check'>✓</span> Watch history
                </li>
                <li>
                  <span className='check'>✓</span> Unlimited playlists
                </li>
                <li>
                  <span className='check'>✓</span> Ad-free experience
                </li>
                <li>
                  <span className='check'>✓</span> Advanced filters
                </li>
              </ul>
            </div>
            <button className='pricing-button'>Get Premium</button>
          </div>
        </div>

        <div className='pricing-note'>
          <p>
            All plans include a 14-day free trial. No credit card required to
            start.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className='faq'
        id='faq'
      >
        <div className='section-title'>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about FocusView</p>
        </div>

        <div className='faq-container'>
          {[
            {
              question: 'How does FocusView work with YouTube?',
              answer:
                'FocusView connects to YouTube through their public API. When you find a video you want to save, simply copy the URL and paste it into FocusView, or use our browser extension to save with one click. The video will be added to your collection for distraction-free viewing later.',
            },
            {
              question: 'Do I need a YouTube account to use FocusView?',
              answer:
                "No, you don't need a YouTube account to use FocusView. However, if you want to access your private playlists or videos from your YouTube account, you'll need to connect your YouTube account to FocusView.",
            },
            {
              question: 'Is FocusView available on mobile devices?',
              answer:
                'Yes! FocusView is available as a web app that works on all modern browsers, and we also offer native apps for iOS and Android. Your collection syncs automatically across all your devices.',
            },
            {
              question: 'Can I download videos for offline viewing?',
              answer:
                "FocusView doesn't download or store YouTube videos directly. Instead, it saves references to videos that are still hosted on YouTube. However, Premium plan users can access our offline mode feature which caches videos for limited periods when you know you'll be without internet.",
            },
            {
              question:
                "What happens if a video I've saved gets deleted from YouTube?",
              answer:
                'If a video is removed from YouTube, it will be marked as "unavailable" in your FocusView collection. We can\'t restore videos that have been removed from YouTube, but we keep the metadata so you\'ll know what you had saved.',
            },
            {
              question: 'Can I share my collections or playlists with others?',
              answer:
                'Yes! Pro and Premium users can create shareable links to their collections and playlists. You can choose whether to make these public or restrict them with a password.',
            },
          ].map((faq, index) => (
            <div
              className={`faq-item ${activeFaqItem === index ? 'active' : ''}`}
              key={index}
            >
              <div
                className='faq-question'
                onClick={() => toggleFaqItem(index)}
              >
                <h3>{faq.question}</h3>
                <span className='faq-icon'>+</span>
              </div>
              <div className='faq-answer'>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='cta'>
        <h2>Ready to Take Back Control?</h2>
        <p>
          Join thousands of users who have transformed their YouTube experience
          with FocusView.
        </p>
        <button className='cta-button-secondary'>Get Started for Free</button>
      </section>
    </>
  );
};

export default Home;
