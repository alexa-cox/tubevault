import React from 'react';
import { Link } from 'react-router-dom';
import {
  APP_EMAIL,
  APP_NAME,
  APP_OWNER,
  APP_URL,
  LEGAL_EFFECTIVE_DATE,
} from '../../utils/appConstants';
import styles from './legal.module.css';

function Privacy() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <div className={styles.rightEdge}></div>
        <div className={styles.rightEdgeHoles}></div>
        <h1 className={styles.legalTitle}>PRIVACY POLICY</h1>

        <section className={styles.legalSection}>
          <p>
            Thank you for choosing to be part of our community at {APP_NAME} by{' '}
            {APP_OWNER} (Hereafter, "Website," "Site," "Company," "we," "us,"
            "our"). Protecting your personal information is of utmost importance
            to us. If you have any questions, comments, or concerns after
            reviewing this Privacy Policy agreement, please contact us at{' '}
            {APP_EMAIL}.
          </p>
          <p>
            When you visit and use (register, answer surveys, fill out a form,
            contact us through a form) our Website and services, this means you
            trust us with your personal information. Therefore, this privacy
            policy describes how we use the information we collect from you when
            you use our Website and services and what rights you have in
            relation to your information.
          </p>
          <p>
            If you disagree with any terms in this privacy policy, please
            discontinue your use of our Sites and services.
          </p>
          <p>
            This privacy policy applies to all the information collected through
            your use of our Website and services and other third-party tools. By
            using our Website and/or services, or by clicking "Agree" or
            "Accept" to the Terms of Use when this option is explicitly made
            available to you, you acknowledge, accept and agree to be bound by
            the Privacy Policy terms and to abide by them.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>WHAT INFORMATION DO WE COLLECT?</h2>
          <h3>Personal Information We Collect About You</h3>
          <p>
            During your visit and use of our Website and services, we collect
            certain data that you provide to us when you fill out opt-in forms,
            contact forms, and surveys, when you purchase products and/or
            services, and when you enter your information for giveaways and/or
            competitions.
          </p>
          <p>
            The personal information that you provide to us can be your name,
            email address, location, and occupation. Moreover, if you are
            purchasing products, then you are also providing us with payment and
            address information. (However, your payment information is not
            stored in our system because purchases are processed through payment
            processors.) Therefore, should you have any questions about payment
            activities and/or information, contact the specific payment
            processor directly.
          </p>
          <p>
            <em>
              <span className={styles.boldText}>
                In the preceding 12 months, we have collected the following
                categories and specific types of consumer personal information:
              </span>
            </em>
          </p>

          <div className={styles.tableContainer}>
            <table className={styles.legalTable}>
              <thead>
                <tr>
                  <th>Categories of Personal Information</th>
                  <th>Specific Types of Personal Information Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Identifiers</strong> (e.g., a real name, alias,
                    postal address, unique personal identifier, online
                    identifier, Internet Protocol address, email address,
                    account name, social security number, driver's license
                    number, passport number, or other similar identifiers)
                  </td>
                  <td>
                    {APP_NAME} collects name, email address, and IP address
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Characteristics of protected classifications under
                      California or federal law such as
                    </strong>{' '}
                    race, religious creed, color, national origin, ancestry,
                    physical disability, mental disability, medical condition,
                    marital status, sex, age, or sexual orientation
                  </td>
                  <td>None collected</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Information that identifies, relates to, describes, or is
                      capable of being associated with, a particular individual
                    </strong>
                    , including, but not limited to, his or her name, signature,
                    social security number, physical characteristics or
                    description, address, telephone number, passport number,
                    driver's license or state identification card number,
                    insurance policy number, education, employment, employment
                    history, bank account number, credit card number, debit card
                    number, or any other financial information, medical
                    information, or health insurance information.
                  </td>
                  <td>Name and email address</td>
                </tr>
                <tr>
                  <td>
                    <strong>Commercial information</strong> (e.g., records of
                    personal property, products or services purchased, obtained,
                    or considered, or other purchasing or consuming histories or
                    tendencies)
                  </td>
                  <td>Purchase history</td>
                </tr>
                <tr>
                  <td>
                    <strong>Biometric information such as</strong> fingerprint
                    recognition, facial detection, palm vein scanning, iris
                    recognition, and even voice recognition, etc.
                  </td>
                  <td>None collected</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Internet or other electronic network activity information
                    </strong>{' '}
                    (e.g., browsing history, search history, and information
                    regarding a consumer's interaction with an Internet Web
                    site, application, or advertisement)
                  </td>
                  <td>Browsing activity on our website</td>
                </tr>
                <tr>
                  <td>
                    <strong>Geolocation data</strong>
                  </td>
                  <td>General location based on IP address</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Audio, electronic, visual, thermal, olfactory, or similar
                      information
                    </strong>
                  </td>
                  <td>None collected</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Professional or employment-related information
                    </strong>
                  </td>
                  <td>None collected</td>
                </tr>
                <tr>
                  <td>
                    <strong>Education information</strong>, defined as
                    information that is not publicly available personally
                    identifiable information as defined in the Family
                    Educational Rights and Privacy Act (FERPA) According to the
                    U.S. Department of Education, personally identifiable
                    information for education records is a FERPA term referring
                    to identifiable information that is maintained in education
                    records and includes direct identifiers, such as a student's
                    name or identification number, indirect identifiers, such as
                    a student's date of birth, or other information which can be
                    used to distinguish or trace an individual's identity either
                    directly or indirectly through linkages with other
                    information.
                  </td>
                  <td>None collected</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Inferences drawn from any of the information identified
                      above to create a profile about a consumer
                    </strong>{' '}
                    reflecting the consumer's preferences, characteristics,
                    psychological trends, predispositions, behavior, attitudes,
                    intelligence, abilities, and aptitudes
                  </td>
                  <td>User preferences based on site interaction</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sensitive Personal Information</strong>, for
                    example, social security number, credit card number, date of
                    birth, drivers license number
                  </td>
                  <td>None collected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.legalSection}>
          <h2>
            YOUR RIGHTS UNDER CALIFORNIA CONSUMER PRIVACY ACT ("CCPA") AS
            AMENDED BY CALIFORNIA PRIVACY RIGHTS ACT OF 2020 ("CPRA")
          </h2>
          <p>
            To access a detailed CCPA policy and know your rights refer to the
            separate CCPA policy <Link to='/ccpa'>linked here</Link> where we
            notify you of your rights and our obligations under the amended
            CCPA.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>OUTSIDE OF THE EUROPEAN UNION ("EU")</h2>
          <p>
            If you are outside of the EU and enter your information to receive a
            freebie, make a purchase, respond to a survey, register for free
            training, or participate in a webinar, then we will automatically
            enroll you to receive our newsletter and updates.
          </p>
          <p>
            If you do not wish to receive any communications from us, you can
            opt-out by clicking on the unsubscribe link located at the bottom of
            the emails.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>IN THE EUROPEAN UNION</h2>
          <p>
            If you are in the EU and opt to receive a freebie or participate in
            free training, register for a webinar or live event, or purchase a
            product, your email address will not be added to the email list to
            receive our newsletter and updates unless you affirmatively consent
            to it.
          </p>
          <p>
            If you change your mind at any point and do not want to receive
            electronic communication, simply unsubscribe.
          </p>
          <p>
            If you have trouble unsubscribing by clicking the link at the bottom
            of the email, simply email us at {APP_EMAIL} and request to be
            unsubscribed from future emails.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>YOUR RIGHTS UNDER GDPR</h2>
          <p>
            As someone who resides in the European Union, you are entitled to
            exercise certain rights that you are given under the General Data
            Protection Regulation (GDPR).
          </p>
          <p>
            Any information or data that you choose to provide us will be kept
            with {APP_OWNER} until one of these happens: (1) you ask {APP_OWNER}{' '}
            to DELETE the information and/or data; (2) {APP_OWNER} decides to
            STOP USING the existing data processors, or (3) {APP_OWNER} decides
            that the cost of retaining the data outweighs the value in retaining
            it.
          </p>
          <p>
            As a consumer and/or visitor on our Site who is located in the
            European Union region, you have the right to request access to the
            data that {APP_OWNER} collected on you and stores it.
          </p>
          <p>
            You are within your rights to demand to know exactly what data and
            information {APP_OWNER} has collected on you. Keep in mind that some
            parts of this data were provided by you personally, while others
            were gathered through cookies and pixels.
          </p>
          <p>
            You have the right to withdraw consent to the data that you
            previously gave us to collect and process. The right to withdraw
            consent applies to any future processing of that data. However, any
            data that has been collected and processed previously based on valid
            consent is lawful and not subject to liability based on any legal
            grounds.
          </p>
          <p>
            You also have the right to request the erasure of your data and all
            your information from {APP_OWNER}'s data storage. Once you request
            that your data be erased from {APP_OWNER}'s databases, we have
            thirty (30) days to comply with your request. If it's impossible to
            comply within 30 days, then {APP_OWNER} will respond to the
            Visitor's request and let them know about the issue and also give
            them a reasonable time as to when their request for deletion will be
            honored.
          </p>
          <p>
            Aside from rights such as a request to access, request to delete,
            and rectify, an EU user also has the right to place restrictions on
            the data processing itself. This means a user can limit certain
            things that {APP_OWNER} can and cannot do with their data. You can
            choose to limit the transfer of your data to third-party businesses
            (unless it's essential for {APP_OWNER}'s basic functions).
          </p>
          <p>
            You further have the right to file a complaint with a supervisory
            authority that oversees and handles issues related to the GDPR.
          </p>
          <p>
            Lastly, it's {APP_OWNER}'s duty to inform you that we only require
            information that is reasonably necessary to enter into a contract
            with you. We do not collect any unnecessary data, and any
            information we acquire is used for legitimate business purposes,
            such as growing and scaling our business or being able to provide
            satisfactory customer service to you and other users.
          </p>
          <p>
            <em>
              <span className={styles.boldText}>
                Here is a quick table version of all your rights under GDPR
              </span>
            </em>
            .
          </p>

          <div className={styles.tableContainer}>
            <table className={styles.legalTable}>
              <thead>
                <tr>
                  <th>Right</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Right to Access</strong>
                  </td>
                  <td>
                    The right to be provided with a copy of your personal
                    information (the right of access)
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to Rectification</strong>
                  </td>
                  <td>
                    The right to require us to correct any mistakes in your
                    personal information
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to Deletion/Right to be Forgotten</strong>
                  </td>
                  <td>
                    The right to require us to delete your personal
                    information—in certain situations
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to Restriction of Processing</strong>
                  </td>
                  <td>
                    The right to require us to restrict processing of your
                    personal information—in certain circumstances, e.g. if you
                    contest the accuracy of the data
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to Data Portability</strong>
                  </td>
                  <td>
                    The right to receive the personal information you provided
                    to us, in a structured, commonly used and machine-readable
                    format and/or transmit that data to a third party—in certain
                    situations
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to Object</strong>
                  </td>
                  <td>
                    The right to object:
                    <ul>
                      <li>
                        at any time to your personal information being processed
                        for direct marketing (including profiling);
                      </li>
                      <li>
                        in certain other situations to our continued processing
                        of your personal information, e.g. processing carried
                        out for the purpose of our legitimate interests.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Right Not to be Subject to Automated Individual
                      Decision-Making
                    </strong>
                  </td>
                  <td>
                    The right not to be subject to a decision based solely on
                    automated processing (including profiling) that produces
                    legal effects concerning you or similarly significantly
                    affects you
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.legalSection}>
          <h2>BRAZILIAN DATA PROTECTION LAW ("LGPD")</h2>
          <p>
            The Brazilian Data Protection Law or the LGPD, which is derived from
            its Portuguese name. The LGPD is Brazil's law on online privacy
            requirements and certain rights and privileges given to data
            subjects.
          </p>
          <p>
            Under the LGPD, "processing" is defined as collection, production,
            reproduction, transmission, receipt, use, classification, filing,
            storage, control or evaluation of data, deletion, dissemination,
            extraction, modification, and communication. The LGPD applies to
            "personal data" that is defined as any information related to an
            identified or identifiable natural person. Moreover, sensitive data
            such as political opinion, racial or ethnic origin, religion,
            health, sex and more as they relate to a natural person.
          </p>
          <p>
            Under the LGDP, the data subjects are given the following rights
            relating to their personal data:
          </p>
          <ul className={styles.legalList}>
            <li>
              Awareness and confirmation of the existence of data processing;
            </li>
            <li>
              Anonymization or pseudonymization or removal of pieces of data
              that have been collected or processed without compliance with the
              LGPD;
            </li>
            <li>Access to personal data;</li>
            <li>Correction of inaccurate data;</li>
            <li>Right to request deletion;</li>
            <li>Portability;</li>
            <li>Right to revocation of consent;</li>
            <li>
              Right to request disclosure of any third parties with whom
              personal data is shared;
            </li>
            <li>
              Access to the customer policy information and consent revocation
              terms and conditions.
            </li>
          </ul>
          <p>
            The data subject has the right to exercise these rights with our
            business {APP_NAME} by {APP_OWNER} anytime, free of charge.
          </p>
          <p>
            As a business, we can only process personal data if there is any
            legal basis for processing that data. The LGPD provides
            approximately ten (10) legal basis for processing data. The ten
            grounds are:
          </p>
          <ol className={styles.legalOrderedList}>
            <li>
              The data subject gives{' '}
              <span className={styles.boldText}>express consent</span> to
              process the data.
            </li>
            <li>
              Data processing is necessary to{' '}
              <span className={styles.boldText}>
                comply with a legal obligation
              </span>
              .
            </li>
            <li>
              Processing is essential{' '}
              <span className={styles.boldText}>
                to protect the life or physical safety
              </span>{' '}
              of the data subject or another third party.
            </li>
            <li>
              Necessary{' '}
              <span className={styles.boldText}>
                to execute a contract or contract-related procedures
              </span>{' '}
              that the data subject is a party to at the request of the data
              subject.
            </li>
            <li>
              Necessary to process{' '}
              <span className={styles.boldText}>
                to fulfill the legitimate interests of the controller
              </span>{' '}
              or of the third party, except when the data subject's fundamental
              rights prevail.
            </li>
            <li>
              Necessary to process{' '}
              <span className={styles.boldText}>
                in order to protect credit
              </span>{' '}
              (refers to a credit score).
            </li>
            <li>
              You need to process{' '}
              <span className={styles.boldText}>to protect the health</span> in
              relation to activities of health professionals or health entities.
            </li>
            <li>
              Necessary to process to carry out studies by research entities{' '}
              <span className={styles.boldText}>that ensure</span>, when
              possible,{' '}
              <span className={styles.boldText}>
                the anonymization of personal data
              </span>
              .
            </li>
            <li>
              Necessary to process{' '}
              <span className={styles.boldText}>
                to exercise rights in judicial, arbitration, and administrative
                procedures.
              </span>
            </li>
            <li>
              Necessary to process{' '}
              <span className={styles.boldText}>
                to execute public policies
              </span>{' '}
              provided in laws or regulations or those that are based on
              contracts, policies, agreements, or similar binding instruments.
            </li>
          </ol>
          <p>
            {APP_NAME} mostly uses legal basis #1 and #5 above, which are that
            the data subject gives{' '}
            <span className={styles.boldText}>express consent</span> to process
            the data, and that processing is necessary{' '}
            <span className={styles.boldText}>
              to fulfill the legitimate interests of the controller
            </span>{' '}
            or of the third party, except when data subject's fundamental rights
            prevail to process personal and sensitive data collected from you.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>VIRGINIA CONSUMER DATA PROTECTION ACT ("VCDPA")</h2>
          <p>
            This section of the document supplements the information provided in
            this privacy policy. It is provided by the controller running the
            application and its parent, subsidiaries, and affiliates if
            applicable, who will collectively be referred to as "we," "us," or
            "our".
          </p>
          <p>
            The provisions in this section apply to all users who are consumers
            residing in the Commonwealth of Virginia and are governed by the
            Virginia Consumer Data Protection Act (VCDPA). If there are any
            conflicting provisions in the privacy policy, the provisions in this
            section will supersede them.
          </p>
          <p>
            The term "personal data" used in this section is defined in the
            VCDPA as any information that is linked or reasonably linkable to an
            identified or identifiable natural person.{' '}
            <em>Va. Code Ann. § 59.1-575</em>.{' '}
            <span className={styles.boldText}>Personal data</span> does not
            include de-identified <span className={styles.boldText}>data</span>{' '}
            or publicly available information.
          </p>
          <h3>Categories of Personal Data Processed</h3>
          <p>
            We summarize the categories of personal data that we process and
            their purposes in this section. For detailed information, you can
            refer to the "Detailed information on the processing of Personal
            Data" section of the document.
          </p>
          <h3>Categories of Personal Data We Collect</h3>
          <p>
            The categories of personal data that we have collected include
            identifiers and internet information such as {APP_NAME} collects
            name, email address, and IP address. We do not collect sensitive
            data and will not collect additional categories without informing
            you. Sensitive data includes, but is not limited to, information on
            racial or ethnic origin, religious beliefs, mental or physical
            health diagnosis, sexual orientation, and citizenship or immigration
            status.
          </p>
          <h3>Reasons for Processing Personal Data</h3>
          <p>
            We will not use your personal data for purposes that are
            incompatible with those disclosed initially without your consent.
            You can grant, deny, or withdraw your consent at any time using the
            contact details provided in the document.
          </p>
          <h3>Sharing Your Personal Data With Third Parties</h3>
          <p>
            We share your personal data with third parties listed in this
            privacy policy. These third parties are grouped based on the
            different purposes of processing. For our purposes, a "third party"
            refers to a person or entity that is not the consumer, controller,
            processor, or an affiliate of the processor or the controller, as
            defined by the VCDPA.
          </p>
          <h3>Sale of Your Personal Data</h3>
          <p>
            The sale of personal data is defined as any exchange of personal
            data for monetary consideration by us to a third party, as defined
            by the VCDPA. Note that disclosing personal data to a processor who
            processes personal data on behalf of a controller is not considered
            a sale.
          </p>
          <p>
            Our use of your personal data may be considered a sale under the
            VCDPA.
          </p>
          <h3>Opting-Out of the Sale Of Your Personal Data</h3>
          <p>
            You have the right to opt out of the sale of your personal data. To
            exercise this right, you can contact us at any time using the
            contact details provided in this privacy policy.
          </p>
          <p>
            We will use any personal data collected from you for the sole
            purpose of complying with your opt-out request.
          </p>
          <h3>Processing of Personal Data for Targeted Advertising</h3>
          <p>
            We do not process your personal data for targeted advertising. If we
            decide to do so in the future, we will inform you and give you the
            right to opt-out.
          </p>
          <h3>
            Privacy Rights Granted Under the Virginia Consumer Data Protection
            Act ("VCDPA")
          </h3>
          <p>
            Under the Virginia Consumer Data Protection Act, you have the
            following rights regarding the processing of your personal data by
            us:
          </p>
          <ul className={styles.legalList}>
            <li>
              <span className={styles.boldText}>The Right to Know</span>: You
              have the right to know if we are processing your personal data and
              to access it.
            </li>
            <li>
              <span className={styles.boldText}>The Right to Correct</span>: You
              have the right to request correction of any inaccurate personal
              data we maintain about you.
            </li>
            <li>
              <span className={styles.boldText}>
                The Right to Request Deletion
              </span>
              : You have the right to request the deletion of your personal
              data.
            </li>
            <li>
              <span className={styles.boldText}>
                The Right to Portability of Data
              </span>
              : We will provide a portable and usable copy of your personal data
              if it is technically feasible.
            </li>
            <li>
              <span className={styles.boldText}>
                Opt-out of Targeted Advertising, Sale of Personal Data or
                Profiling
              </span>
              : You have the right to opt out of the processing of your personal
              data for targeted advertising, the sale of personal data, or
              profiling.
            </li>
            <li>
              <span className={styles.boldText}>Non-Discrimination</span>: We
              will not discriminate against you for exercising your rights under
              the VCDPA. However, if the personal data or sale is necessary for
              us to provide goods or services, we may not be able to complete
              the transaction if you refuse to provide the data or ask us to
              delete or stop selling it.
            </li>
          </ul>
          <h3>How and When We Are Expected to Comply With Your Request</h3>
          <p>
            We do our due diligence to respond to all requests as soon as
            possible, within 45 days of the receipt of the request date. Should
            we need more time to respond, we will contact you and notify you of
            our reasons for needing more time and how much time we need. Under
            the law, we may take up to 90 days to fulfill your request.
          </p>
          <p>
            We will do so if there are reasonable and lawful grounds for denying
            your request. You have the right to appeal the denial. Within 60
            days of the receipt of the appeal, we will notify you in writing of
            any action taken or not taken in response to your appeal. If your
            appeal is denied, you may contact the Attorney General to submit a
            complaint.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Information Collected Through Third-Party Sources</h2>
          <p>
            During the time you visit and use our Site, certain limited data are
            collected from public databases, marketing partners, social media
            platforms, and analytics sources.
          </p>
          <p>
            The types of data collected about you from other sources are your
            location, your computer system, which pages you have visited on our
            Site, how long you spend on each page, your IP address, your
            country, and possibly even your social media profiles and referrals.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>CHILDREN'S PRIVACY AND DATA</h2>
          <p>
            This Website is not intended for children under the age of 13. We
            and this Website do not knowingly and intentionally collect any
            personally identifiable information from children under the age of
            13. If you are under 13 years of age, please do not use or provide
            any information on this Website. Do not use any third parties that
            might have links present on this Website. Do not provide your name,
            address, phone number or any payment information.
          </p>
          <p>
            If a parent or guardian believes that this Website unknowingly
            collected personally identifiable information from a child under the
            age of 13 in its database, please contact us at once at {APP_EMAIL},
            and we will do our best to immediately remove any and all such
            information from our database.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>HOW DO WE USE THE INFORMATION WE COLLECT FROM YOU?</h2>
          <h3>Information Collected from You</h3>
          <p>
            We use the information we collect from you to send you targeted
            marketing and promotional communications. If at any time you
            indicated an interest in a particular field related to our Site,
            then we and/or our third-party marketing partners may use this
            relevant information to send you additional communication regarding
            similar products/services.
          </p>
          <p>
            If you do not want to receive any marketing and/or promotional
            communication, you can opt-out at any time by UNSUBSCRIBING from
            either a particular list or topic or from all the emails coming from
            us by clicking on the <em>unsubscribe</em> button located at the
            bottom of every email you receive.
          </p>
          <h3>Information Collected from Third-Party Apps and Tools</h3>
          <p>
            Any information collected from third-party tools is used for
            statistical and analytical purposes and for evaluating and making
            improvements to our Site. This automatically collected information
            will not include personal information data.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>WILL WE SHARE YOUR INFORMATION WITH ANYONE?</h2>
          <p>
            We respect your privacy and the value of your information. We do not
            share, disclose, sell, lease, or rent your information to anyone or
            any third party without your express consent.
          </p>
          <p>
            Only under limited circumstances will necessary information be
            shared with third parties. Here are the situations in which we will
            share your information:
          </p>
          <ol className={styles.legalOrderedList}>
            <li>You gave us express consent to do so;</li>
            <li>
              You entered into a contract for recurring payments—for this
              reason, your information will be processed on an as-needed basis
              to uphold the agreement;
            </li>
            <li>
              Performance of a contract—if you are obligated to pay or perform
              an action, and you fail, we reserve the right to share necessary
              information with a third-party company, such as a collection
              agency or an attorney; and
            </li>
            <li>
              Mandated by law—if legal proceedings are initiated, and there is a
              subpoena (unlikely, but better to be prepared than surprised).
            </li>
          </ol>
        </section>

        <section className={styles.legalSection}>
          <h2>WE MAY USE COOKIES AND OTHER TRACKING TECHNOLOGIES</h2>
          <p>
            We may use cookies and other tracking technologies, such as pixels,
            to collect data on advertisements, website use, and information
            retention.
          </p>
          <p>
            You can read more about this in our Cookie Policy. Know that by
            agreeing to our Privacy Policy, you are also agreeing to our Cookie
            Policy.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>EMAIL COMMUNICATIONS & POLICIES</h2>
          <p>
            If you decide to contact us through email, we reserve the right to
            retain the content of your email messages, your email address, and
            our responses.
          </p>
          <p>
            Your privacy is important to us. Therefore, your email address will
            never be shared, sold, or leased to any third-party members.
          </p>
          <p>
            In compliance with the CAN-SPAM Act, any and all communications sent
            from our Company or Website will clearly state who the email is
            from, who the email is for, and how to contact the sender.
          </p>
          <p>
            Furthermore, should you wish not to receive any more emails, you can
            click on the "Unsubscribe" link located at the bottom of the email.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions, concerns, or comments regarding our
            Privacy Policy, please feel free to reach out to us:
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

export default Privacy;
