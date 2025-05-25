import React from 'react';
import { Link } from 'react-router-dom';
import {
  APP_EMAIL,
  APP_NAME,
  APP_OWNER,
  APP_STATE,
  APP_URL,
  LEGAL_EFFECTIVE_DATE,
} from '../../utils/appConstants';
import styles from './legal.module.css';

function Terms() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <div className={styles.rightEdge}></div>
        <div className={styles.rightEdgeHoles}></div>
        <h1 className={styles.legalTitle}>Terms of Use</h1>

        <section className={styles.legalSection}>
          <p>
            This Terms of Use agreement is entered into by and between You and{' '}
            {APP_OWNER} (hereafter, “Website”, “Site”, “Company”, “I”, “We”,
            “Me”, “My”, “Us”, “Our”).
          </p>
          <h2>1. AGREEMENT TO THE TERMS OF USE</h2>
          <p>
            These Terms of Use constitute a legally binding agreement between
            You and Our Company concerning your access to and use of the{' '}
            {APP_NAME} website, as well as any other application, media channel,
            or tool related to the Website.
          </p>
          <p>
            <span className={styles.boldText}>
              You understand, acknowledge, and accept that by accessing this
              Website, you are bound by all of these Terms of Use.
            </span>{' '}
            By using the Website or by clicking to accept or agree to the Terms
            of Use when this option is made exp ressly available to you, you
            accept and agree to be bound and abide by these Terms of Use.
          </p>
          <h3>Privacy Policy</h3>
          <p>
            Moreover, your agreement also means that you are agreeing to our{' '}
            <Link to='/privacy'>Privacy Policy</Link>. Read our Privacy Policy
            for more detailed information. Our Privacy Policy governs the areas
            of data collection and how we use and handle such information.{' '}
          </p>
          <h3>Disclaimer</h3>
          <p>
            Your use of our Website is also subject to our Disclaimer. You can
            read our <Link to='/disclaimer'>Disclaimer policy</Link>, which
            governs the Website. Moreover, the Disclaimer informs users and
            visitors of the Website of various limitations regarding the
            information provided on the Website. By agreeing to the Terms of
            Use, you are also acknowledging and agreeing to the Disclaimer.{' '}
          </p>
          <p>
            The Website is intended for users who are at least 18 years old.
            Persons under the age of 13 are not permitted to use or register for
            the Website.{' '}
          </p>
          <p>
            If you do not agree with all these Terms of Use, then you must not
            access the Website, click on any links, or use the Website in any
            way.{' '}
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>2. ADDITIONS AND MODIFICATIONS TO THE TERMS</h2>
          <p>
            We reserve the right to make changes and additions to these Terms of
            Use from time to time. Any and all changes are effective immediately
            as soon as we post them on our Website.{' '}
            <span className={styles.boldText}>
              If you continue using the Website after we post our changes to the
              Terms of Use, it means that you have read the new Terms of Use and
              understand, acknowledge, and agree to them.
            </span>
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>3. INTELLECTUAL PROPERTY RIGHTS</h2>
          <p>
            This Website/Company is our proprietary property unless otherwise
            indicated. We have complete ownership and control of any source
            code, databases, functionality, software, website designs, audio,
            video, text, photographs, and graphics on the Site (hereafter,
            “Content”) and the trademarks, service marks, and logos contained
            therein (hereafter, “Marks”). The Content and Marks are protected by
            copyright and trademark laws and various other intellectual property
            rights and unfair competition laws of the United States, foreign
            jurisdictions, and international conventions.
          </p>
          <p>
            As a visitor and user of this Website, you are given a limited
            license and are not permitted to break the boundaries of that
            license.{' '}
          </p>
          <p>
            As a condition of your use of our Website, you agree and acknowledge
            to not use the Website or any of the resources available for
            download from the Website for any purpose that is prohibited by
            these Terms of Use and/or is unlawful.{' '}
            <span className={styles.boldText}>
              You will not use the Website for any illegal or unauthorized
              purpose or to advertise or offer to sell goods and services. In
              addition, you will not engage in unauthorized framing of or
              linking to the Website; attempt to impersonate another user;
              interfere with the Website in a way that affects other people’s
              quality of use of the Website; or attempt to bypass or hack any
              measures of the Site designed to prevent or restrict access to the
              Site or to any portion of the Site.
            </span>
          </p>
          <p>
            Content belonging to the Company or included on the Website is not
            for resale. In the case you have permission to download something,
            such as a freebie, PDF, e-book, guide, etc., you are not allowed to
            sell it or transfer it to another person.
          </p>
          <p>
            You will not delete or alter any content or other proprietary rights
            or notices. The Company and the Website do not grant you any
            licenses for ownership or proprietary rights.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>4. THIRD-PARTY WEBSITES AND CONTENT</h2>
          <p>
            Our Website may contain links to other websites as well as articles,
            blog posts, photographs, quotations, software, and information in
            general.
          </p>
          <p>
            Such Third-Party Websites are not monitored or controlled by our
            Website or Company. Therefore, we are not responsible or liable for
            any content the Third- Party Websites might show, write, or use. You
            are clicking on Third-Party Website links at your own risk.
            Moreover, the instant you click on a Third-Party Website link, these
            Terms of Use no longer govern those Third-Party Websites.
          </p>
          <h3>Indemnification </h3>
          <p>
            You agree and understand that we do not endorse the products or
            services offered by Third-Party Websites. You indemnify us from any
            harm caused by your purchase and/or use of such products and
            services.
          </p>
          <p>
            If you sustain any harm or losses due to your use or purchase of
            Third-Party Website products or services, you hold us harmless. We
            are not responsible for your actions or those of Third-Party
            Websites.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>5. CONTENT FOR EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY </h2>
          <p>
            Any downloads, articles, and resources provided on the Website and
            through the Website are solely provided for educational and
            informational purposes only. Nothing provided on and through the
            Website should be construed as legal, medical, financial, tax, or
            any other professional advice. You can find detailed information on
            this inside the Disclaimer.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>6. MODIFICATIONS AND INTERRUPTIONS TO THE SITE</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of
            the Site at any time for any reason at our discretion without
            needing permission from anyone and without notice. Furthermore, we
            have no obligation to update any information on our Site.
          </p>
          <p>
            We will not be liable to You or any third party if we decide to
            modify, change, or remove part or all of the content from the Site,
            change prices, or suspend or discontinue the Site. We cannot
            guarantee that the Site will be available at all times. We may
            experience downtime, technical or software difficulties, or we may
            simply decide to discontinue for whatever reason.
          </p>
          <p>
            You agree that we have no liability whatsoever for any loss, damage,
            or inconvenience caused by your inability to access or use our Site.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>7. GOVERNING LAW</h2>
          <p>
            These Terms of Use and your access and use of our Website are
            governed by and construed in accordance with the laws of the United
            States and {APP_STATE}.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>8. BINDING ARBITRATION</h2>
          <p>
            If a dispute arises between You and Our Company and/or Website, and
            if You and Us are unable to resolve the Dispute through informal
            negotiations, then the Dispute will be finally and exclusively
            resolved by binding arbitration. Any arbitration will take place in{' '}
            {APP_STATE} only. You further agree that you shall be responsible
            for all costs associated with initiating the arbitration and for the
            administration of the arbitration.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>9. INTERNATIONAL USERS</h2>
          <p>
            This Website and these Terms of Use are controlled, operated, and
            administered by Our Company and Website located in {APP_STATE},
            United States of America (“USA”).{' '}
            <span className={styles.boldText}>
              If you access the Website and services from a location outside of
              the USA, then you are responsible for complying with all the local
              laws.
            </span>{' '}
            You acknowledge and agree that you may not access and use this
            Website and its contents and services in any way, manner, or country
            prohibited by applicable laws and regulations.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>10. NO JOINT VENTURE OR PARTNERSHIP</h2>
          <p>
            No Joint Venture or Partnership/Agency relationship is created
            between You and Us by your access and use of the Website and by
            these Terms of Use. You further agree that these Terms of Use will
            not be construed against us simply because we drafted them. You
            waive any and all defenses you may have based on the electronic form
            of these Terms of Use and the fact that they are not signed by the
            parties.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>11. ENTIRETY OF THE AGREEMENT</h2>
          <p>
            You acknowledge, understand, and agree that these Terms of Use,
            Privacy Policy, and Disclaimer constitute the Entire Agreement
            between the user and the Company and/or Website.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>12. CONTACT US</h2>
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

export default Terms;
