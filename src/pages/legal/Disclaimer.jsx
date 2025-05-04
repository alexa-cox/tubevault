import React from 'react';
import {
  APP_EMAIL,
  APP_NAME,
  APP_OWNER,
  APP_URL,
  LEGAL_EFFECTIVE_DATE,
} from '../../utils/appConstants';
import styles from './legal.module.css';

function Disclaimer() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <div className={styles.rightEdge}></div>
        <div className={styles.rightEdgeHoles}></div>
        <h1 className={styles.legalTitle}>Disclaimer</h1>

        <section className={styles.legalSection}>
          <p>
            Any and all information provided by {APP_OWNER} ("we," "us," "our,"
            "my," "me," or "I") on {APP_NAME} ("Site" or "Website") is for
            general informational and educational purposes only.
          </p>
          <p>
            This Disclaimer, along with the Terms of Use and Privacy Policy,
            governs and controls your access to and use of {APP_URL}, including
            any and all services, content, and functionality offered on or
            through our Website at {APP_URL}.
          </p>
          <p>
            We provided all the information and content on our Website in good
            faith. However, we do not make any warranties of any kind, express
            or implied, regarding the accuracy, adequacy, validity, reliability,
            availability, or completeness of any information on our Site.
          </p>
          <p>
            We are not liable to you at any time for any loss or damage you may
            have experienced or incurred as a result of the use of our Site or
            reliance on any information provided on our Site.{' '}
            <span className={styles.boldText}>
              Your access and use of our Site and reliance on any information on
              the Site is completely at your own risk
            </span>
            .
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>1. PROFESSIONAL DISCLAIMER</h2>
          <p>
            Our Site cannot and does not contain any legal, medical, tax,
            financial, health, or any other professional advice. All of the
            information provided on our Site is for general informational and
            educational purposes ONLY. You should NOT take any information on
            our Site as a substitute for professional advice. Before taking
            action based on any such information, we encourage you to consult
            with the appropriate professionals.
          </p>
          <p>
            <span className={styles.boldText}>
              Your access to, use of, and reliance on any information provided
              on our Site is solely at your own risk
            </span>
            .
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>2. CONNECTION TO YOUTUBE/GOOGLE DISCLAIMER</h2>
          <p>
            This YouTube gallery is not affiliated with, endorsed by, sponsored
            by, or officially connected with YouTube LLC or Google LLC. All
            YouTube names, logos, trademarks, and registered trademarks are the
            property of their respective owners.
          </p>
          <p>
            The content displayed in this gallery is sourced from YouTube
            through their public API and is presented for informational and
            entertainment purposes only. All rights to the content belong to
            their original creators and YouTube.
          </p>
          <p>
            This gallery serves as an independent viewer interface and does not
            claim ownership of any YouTube content. If you believe any content
            has been used inappropriately, please contact us immediately and we
            will address your concerns promptly.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>3. DISCLAIMER FOR EXTERNAL LINKS</h2>
          <p>
            From time to time, our Site may contain links to other external
            websites and third parties. Moreover, we may have ads and banners on
            our Website that contain external links in them to third-party
            websites, products, and companies. We do not check, control,
            validate, monitor, or investigate such links for accuracy, adequacy,
            validity, reliability, availability, or completeness.{' '}
            <span className={styles.boldText}>
              We do not warrant, endorse, guarantee, or assume responsibility
              for any information or product offered by third-party websites.
            </span>{' '}
            If you choose to click on links and be taken to an external website
            belonging to a third party, then you and only you are responsible
            and liable for your actions should you suffer or incur any harm or
            loss.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>4. WE MAKE NO GUARANTEES</h2>
          <p>
            You acknowledge and agree that our Company and Website have not made
            any guarantees about the results of taking any action. Regardless of
            whether a product or service is recommended,{' '}
            <span className={styles.boldText}>
              we absolutely do not make any guarantees as to the results.
            </span>{' '}
            You understand and agree that what works for one person might not
            work for another person. Moreover, results are dependent on many
            different factors, and we cannot make any guarantees. Whether you
            will succeed or fail is ultimately dependent on your own efforts,
            your particular situation, and numerous other circumstances that are
            beyond our control.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>5. AFFILIATES DISCLAIMER</h2>
          <p>
            Our Website may contain links to affiliate websites. When and if you
            click on an affiliate link and make a purchase through that link, we
            will receive commission for any purchases made by you on the
            affiliate website using such links. Purchases you make through our
            affiliate links are at no additional cost to you. This means you
            will pay the same price for the purchase as everyone else.
          </p>
          <p>
            Whenever we include an affiliate link on a page or post, we will let
            you know in advance so that you are aware that if you choose to
            click on the link and make a purchase, then we will receive a
            commission from that purchase.
          </p>
          <p>
            Here at {APP_NAME}, we like to be completely transparent with our
            viewers and readers. For that purpose, here is a complete list of
            our affiliates:
          </p>
          <ul className={styles.legalList}>
            <li>YouTube</li>
            <li>Google</li>
          </ul>
        </section>

        <section className={styles.legalSection}>
          <h2>6. TESTIMONIAL DISCLAIMER</h2>
          <p>
            Our Site may contain testimonials by actual users of our products
            and/or services. These testimonials reflect the actual user's true
            and own opinions and experiences. We do not pay or manipulate these
            testimonials. They appear on our Website verbatim as given to us by
            the users, except for the correction of grammar or typing errors.
          </p>
          <p>
            However, you agree and understand that the experiences are personal
            to those particular users, and these experiences may not be
            representative of everyone's experience with that product and/or
            service.{' '}
            <span className={styles.boldText}>
              Your individual results may vary
            </span>
            .
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>7. CONTACT US</h2>
          <p>
            We welcome you to contact us if you have any questions, concerns, or
            comments regarding the terms in this agreement.
          </p>
          <address className={styles.contactInfo}>
            <p>{APP_NAME}</p>
            <p>{APP_OWNER}</p>
            <p>{APP_URL}</p>
            <p>{APP_EMAIL}</p>
          </address>
        </section>

        <div className={styles.legalFooter}>
          <p>EFFECTIVE AS OF {LEGAL_EFFECTIVE_DATE}</p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
