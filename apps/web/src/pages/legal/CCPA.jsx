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

function CCPA() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <div className={styles.rightEdge}></div>
        <div className={styles.rightEdgeHoles}></div>
        <h1 className={styles.legalTitle}>
          California Consumer Privacy Act (CCPA)
        </h1>

        <div className={styles.legalDates}>
          <p>
            <span className={styles.boldText}>Effective Date:</span>{' '}
            {LEGAL_EFFECTIVE_DATE}
          </p>
          <p>
            <span className={styles.boldText}>Last Updated on:</span>{' '}
            {LEGAL_EFFECTIVE_DATE}
          </p>
        </div>

        <section className={styles.legalSection}>
          <p>
            This{' '}
            <span className={styles.boldText}>
              Privacy Policy for California Residents
            </span>{' '}
            supplements the information contained in {APP_NAME}'s{' '}
            <Link to='/privacy'>Privacy Policy</Link> and applies solely to all
            visitors, users, and others who reside in the State of California
            ("consumers" or "you"). We adopt this notice to comply with the
            California Consumer Privacy Act of 2018 (CCPA) and any terms defined
            in the CCPA have the same meaning when used in this Policy.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Information We Collect</h2>
          <p>
            We, through our website, collect information that identifies,
            relates to, describes, references, is reasonably capable of being
            associated with, or could reasonably be linked, directly or
            indirectly, with a particular consumer, household, or device ("
            <span className={styles.boldText}>personal information</span>").
            Personal information does not include:
          </p>
          <ul className={styles.legalList}>
            <li>Publicly available information from government records.</li>
            <li>Deidentified or aggregated consumer information.</li>
            <li>
              Information excluded from the CCPA's scope, like:
              <ul>
                <li>
                  Health or medical information covered by the Health Insurance
                  Portability and Accountability Act of 1996 (HIPAA) and the
                  California Confidentiality of Medical Information Act (CMIA),
                  clinical trial data, or other qualifying research data;
                </li>
                <li>
                  Personal information covered by certain sector-specific
                  privacy laws, including the Fair Credit Reporting Act (FCRA),
                  the Gramm-Leach-Bliley Act (GLBA) or California Financial
                  Information Privacy Act (FIPA), and the Driver's Privacy
                  Protection Act of 1994.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            In particular, We collected the following categories of personal
            information from consumers within the last twelve (12) months:
          </p>

          <div className={styles.tableContainer}>
            <table className={styles.legalTable}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                  <th>Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A. Identifiers.</td>
                  <td>
                    A real name, alias, postal address, unique personal
                    identifier, online identifier, Internet Protocol address,
                    email address, account name, Social Security number,
                    driver's license number, passport number, or other similar
                    identifiers.
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    B. Personal information categories listed in the California
                    Customer Records statute (Cal. Civ. Code § 1798.80(e)).
                  </td>
                  <td>
                    A name, signature, Social Security number, physical
                    characteristics or description, address, telephone number,
                    passport number, driver's license or state identification
                    card number, insurance policy number, education, employment,
                    employment history, bank account number, credit card number,
                    debit card number, or any other financial information,
                    medical information, or health insurance information.
                    <br />
                    <br />
                    Some personal information included in this category may
                    overlap with other categories.
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    C. Protected classification characteristics under California
                    or federal law.
                  </td>
                  <td>
                    Age (40 years or older), race, color, ancestry, national
                    origin, citizenship, religion or creed, marital status,
                    medical condition, physical or mental disability, sex
                    (including gender, gender identity, gender expression,
                    pregnancy or childbirth and related medical conditions),
                    sexual orientation, veteran or military status, genetic
                    information (including familial genetic information).
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>D. Commercial information.</td>
                  <td>
                    Records of personal property, products or services
                    purchased, obtained, or considered, or other purchasing or
                    consuming histories or tendencies.
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>E. Biometric information.</td>
                  <td>
                    Genetic, physiological, behavioral, and biological
                    characteristics, or activity patterns used to extract a
                    template or other identifier or identifying information,
                    such as, fingerprints, faceprints, and voiceprints, iris or
                    retina scans, keystroke, gait, or other physical patterns,
                    and sleep, health, or exercise data.
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>F. Internet or other similar network activity.</td>
                  <td>
                    Browsing history, search history, information on a
                    consumer's interaction with a website, application, or
                    advertisement.
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>G. Geolocation data.</td>
                  <td>Physical location or movements.</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>H. Sensory data.</td>
                  <td>
                    Audio, electronic, visual, thermal, olfactory, or similar
                    information.
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>I. Professional or employment-related information.</td>
                  <td>
                    Current or past job history or performance evaluations.
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>
                    J. Non-public education information (per the Family
                    Educational Rights and Privacy Act (20 U.S.C. Section 1232g,
                    34 C.F.R. Part 99)).
                  </td>
                  <td>
                    Education records directly related to a student maintained
                    by an educational institution or party acting on its behalf,
                    such as grades, transcripts, class lists, student schedules,
                    student identification codes, student financial information,
                    or student disciplinary records.
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>K. Inferences drawn from other personal information.</td>
                  <td>
                    Profile reflecting a person's preferences, characteristics,
                    psychological trends, predispositions, behavior, attitudes,
                    intelligence, abilities, and aptitudes.
                  </td>
                  <td>YES</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            We obtain the categories of personal information listed above from
            the following categories of sources:
          </p>
          <ul className={styles.legalList}>
            <li>
              Directly from you when you use our services or interact with our
              website
            </li>
            <li>
              Indirectly from you through your use of our website and services
            </li>
            <li>
              From third-party service providers that help us operate our
              business
            </li>
            <li>From advertising networks</li>
            <li>From data analytics providers</li>
            <li>From social networks when you connect your account</li>
          </ul>
        </section>

        <section className={styles.legalSection}>
          <h2>Use of Personal Information</h2>
          <p>
            We may use or disclose the personal information we collect for one
            or more of the following purposes:
          </p>
          <ul className={styles.legalList}>
            <li>
              To fulfill or meet the reason you provided the information. For
              example, if you share your name and contact information to request
              a price quote or ask a question about our products or services, we
              will use that personal information to respond to your inquiry.
            </li>
            <li>
              To provide, support, personalize, and develop our Website and
              services.
            </li>
            <li>
              To create, maintain, customize, and secure your account with us.
            </li>
            <li>
              To process your requests, purchases, transactions, and payments
              and prevent transactional fraud.
            </li>
            <li>
              To provide you with support and to respond to your inquiries,
              including to investigate and address your concerns and monitor and
              improve our responses.
            </li>
            <li>
              To personalize your Website experience and to deliver content and
              product and service offerings relevant to your interests,
              including targeted offers and ads through our Website, third-party
              sites, and via email or text message.
            </li>
            <li>
              To help maintain the safety, security, and integrity of our
              Website, products and services, databases and other technology
              assets, and business.
            </li>
            <li>
              For testing, research, analysis, and product development,
              including to develop and improve our Website, products, and
              services.
            </li>
            <li>
              To respond to law enforcement requests and as required by
              applicable law, court order, or governmental regulations.
            </li>
          </ul>
          <p>
            We will not collect additional categories of personal information or
            use the personal information we collected for materially different,
            unrelated, or incompatible purposes without providing you notice.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Sharing Personal Information</h2>
          <p>
            If necessary to carry out a business purpose, we may share your
            personal information by disclosing it to a third party. We only make
            these business purpose disclosures under written contracts that
            describe the purposes, require the recipient to keep the personal
            information confidential and prohibit using the disclosed
            information for any purpose except performing the contract.
          </p>
          <p>
            In the preceding twelve (12) months, {APP_NAME} has disclosed
            personal information for a business purpose to the categories of
            third parties indicated in the chart below.
          </p>
          <p>
            We do not sell personal information to third parties, subject to
            your right to opt-out of those sales. Our personal information sales
            do not include information about individuals whom we know to be 16
            and under. In the preceding twelve (12) months, {APP_NAME} has not
            sold personal information.
          </p>

          <div className={styles.tableContainer}>
            <table className={styles.legalTable}>
              <thead>
                <tr>
                  <th>Personal Information Category</th>
                  <th>Category of Third-Party Recipients</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <span className={styles.boldText}>
                      Business Purpose Disclosures
                    </span>
                  </td>
                  <td>
                    <span className={styles.boldText}>Sales</span>
                  </td>
                </tr>
                <tr>
                  <td>A: Identifiers.</td>
                  <td>Service providers, analytics providers</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>
                    B: California Customer Records personal information
                    categories.
                  </td>
                  <td>Service providers</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>
                    C: Protected classification characteristics under California
                    or federal law.
                  </td>
                  <td>None</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>D: Commercial information.</td>
                  <td>Service providers</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>E: Biometric information.</td>
                  <td>None</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>F: Internet or other similar network activity.</td>
                  <td>Analytics providers, advertising networks</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>G: Geolocation data.</td>
                  <td>Service providers, analytics providers</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>H: Sensory data.</td>
                  <td>None</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>I: Professional or employment-related information.</td>
                  <td>None</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>J: Non-public education information.</td>
                  <td>None</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>K: Inferences drawn from other personal information.</td>
                  <td>Analytics providers, advertising networks</td>
                  <td>None</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>Reselling Personal Information</h3>
          <p>
            Under the CCPA, a third-party is prohibited from reselling personal
            information unless you, as the individual about whom the personal
            information is, were given explicit notice and proper opportunity to
            opt-out of further sales.{' '}
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Your Rights and Choices</h2>
          <p>
            The CCPA provides consumers (California residents) with specific
            rights regarding their personal information. This section describes
            your CCPA rights and explains how to exercise those rights.
          </p>

          <h3>Right to Know</h3>
          <p>
            You have the right to request that we disclose certain information
            to you about our collection and use of your personal information
            over the past 12 months. This right under the CCPA is the Right to
            Know. Once we receive your request and confirm your identity, we
            will disclose to you:
          </p>
          <ul className={styles.legalOrderedList}>
            <li>
              The categories of personal information we collected about you.
            </li>
            <li>
              The categories of sources for the personal information we
              collected about you.
            </li>
            <li>
              Our business or commercial purpose for collecting or selling that
              personal information.
            </li>
            <li>
              The categories of third parties with whom we share that personal
              information.
            </li>
            <li>
              If we sold or disclosed your personal information for a business
              purpose, two separate lists disclosing:
              <ul>
                <li>
                  sales, identifying the personal information categories that
                  each category of recipient purchased; and
                </li>
                <li>
                  disclosures for a business purpose, identifying the personal
                  information categories that each category of recipient
                  obtained.
                </li>
              </ul>
            </li>
            <li>
              The specific pieces of personal information we collected about you
              (also called a data portability request).
            </li>
          </ul>

          <p>
            <span className={styles.boldText}>Data Portability </span> must be
            maintained, which is also a right under CCPA as amended. This means
            that the information that is provided as a result of data reque sts
            must be in a readily usable format.
          </p>

          <h3>Right to Delete</h3>
          <p>
            You have the right to request that we delete any of your personal
            information that we collected from you and retained, subject to
            certain exceptions (the "right to delete"). Once we receive your
            request and confirm your identity, we will review your request to
            see if any exceptions apply that would permit us to retain the
            collected information. We may deny your deletion request if
            retaining the information is necessary for us or our service
            provider(s) to:
          </p>
          <ol className={styles.legalOrderedList}>
            <li>
              Complete the transaction for which we collected the personal
              information, provide a good or service that you requested, take
              actions reasonably anticipated within the context of our ongoing
              business relationship with you, fulfill the terms of a written
              warranty or product recall conducted in accordance with federal
              law, or otherwise perform our contract with you.
            </li>
            <li>
              Detect security incidents, protect against malicious, deceptive,
              fraudulent, or illegal activity, or prosecute those responsible
              for such activities.
            </li>
            <li>
              Debug products to locate and fix errors that impair existing
              intended functionality and purpose.
            </li>
            <li>
              Exercise free speech, ensure the right of another consumer to
              exercise their free speech rights, or exercise another right
              provided for by law.
            </li>
            <li>
              Comply with the California Electronic Communications Privacy Act.
            </li>
            <li>Comply with a legal obligation.</li>
            <li>
              Make other internal and lawful uses of that information that are
              compatible with the context in which you provided it.
            </li>
          </ol>
          <p>
            We will delete or de-identify personal information not subject to
            one of these exceptions from our records and will direct our service
            providers to take similar action.
          </p>

          <h3>The Right to Correct Inaccurate Personal Information</h3>
          <p>
            Under CCPA, as amended by CPRA, you have the right to request that
            we correct any inaccurate personal information we maintain about
            you, taking into account the nature of the personal information and
            the purposes of the processing of the personal information.
          </p>

          <h3>Right to Limit the Use of Sensitive or Personal Information</h3>
          <p>
            Under the CCPA, as amended by the CPRA, consumers also have the
            right to limit the use of the collected sensitive or personal
            information on them to the particular purposes and categories that
            the business collected the information for.
          </p>

          <h3>Right to Non-Discrimination for Exercising CCPA Rights</h3>
          <p>
            We will not discriminate against you for exercising any of your CCPA
            rights. Unless permitted by the CCPA, we will not:
          </p>
          <ul className={styles.legalList}>
            <li>Deny you goods or services.</li>
            <li>
              Charge you different prices or rates for goods or services,
              including through granting discounts or other benefits, or
              imposing penalties.
            </li>
            <li>
              Provide you a different level or quality of goods or services.
            </li>
            <li>
              Suggest that you may receive a different price or rate for goods
              or services or a different level or quality of goods or services.
            </li>
          </ul>
          <p>
            However, we may offer you certain financial incentives permitted by
            the CCPA that <span className={styles.boldText}>can result</span> in
            different prices, rates, or quality levels. Participation in a
            financial incentive program requires your prior opt-in consent,
            which you may revoke at any time.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Required Notices at Collection</h2>
          <p>
            Pursuant to the California Consumer Privacy Act (CCPA), businesses
            are required to furnish consumers with specific information via a
            "notice at collection." This notice must identify the categories of
            personal information that the business collects from consumers and
            the reasons why they collect and use such categories of information.
            In the event that the business sells the personal information of
            consumers, the notice at collection must feature a "Do Not Sell or
            Share" hyperlink. Moreover, the notice must include a hyperlink to
            the business's privacy policy, which provides a comprehensive
            overview of the business's privacy practices and the privacy rights
            of consumers. The notice at collection must be issued at or prior to
            the time the business collects the consumer's personal information.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Exercising Your Rights to Know or Delete</h2>
          <p>
            To exercise your rights to know or delete described above, please
            submit a request by either:
          </p>
          <ul className={styles.legalList}>
            <li>Emailing us at {APP_EMAIL}</li>
            <li>
              Visiting our website and submitting a request through our contact
              form
            </li>
          </ul>
          <p>
            Only you, or someone legally authorized to act on your behalf, may
            make a request to know or delete related to your personal
            information.
          </p>
          <p>
            You may also make a request to know or delete on behalf of your
            child (age 13 or younger) by contacting us directly.
          </p>
          <p>
            You may only submit a request to know twice within a 12-month
            period. Your request to know or delete must:
          </p>
          <ul className={styles.legalList}>
            <li>
              Provide sufficient information that allows us to reasonably verify
              you are the person about whom we collected personal information or
              an authorized representative, which may include:
              <ul>
                <li>
                  Your name, email address, and any information previously
                  provided to us
                </li>
              </ul>
            </li>
            <li>
              Describe your request with sufficient detail that allows us to
              properly understand, evaluate, and respond to it.
            </li>
          </ul>
          <p>
            We cannot respond to your request or provide you with personal
            information if we cannot verify your identity or authority to make
            the request and confirm the personal information relates to you.
          </p>
          <p>
            We will only use personal information provided in the request to
            verify the requestor's identity or authority to make it.
          </p>

          <h3>Response Timing and Format</h3>
          <p>
            We will confirm receipt of your request within ten (10) business
            days. If you do not receive confirmation within the 10-day
            timeframe, please contact us at {APP_EMAIL}.
          </p>
          <p>
            If your identity and request were verifiable, then we will respond
            within forty-five (45) days of the receipt of the request. If we
            require more time (up to another 45 days), we will inform you of the
            reason and extension period in writing.
          </p>
          <p>
            If you have an account with us, we will deliver our written response
            to that account. If you do not have an account with us, we will
            deliver our written response by mail or electronically at your
            option.
          </p>
          <p>
            Any disclosures we provide will only cover the 12-month period
            preceding our receipt of your request. The response we provide will
            also explain the reasons we cannot comply with a request, if
            applicable. For data portability requests, we will select a format
            to provide your personal information that is readily useable and
            should allow you to transmit the information from one entity to
            another entity without hindrance, specifically in CSV format.
          </p>
          <p>
            We do not charge a fee to process or respond to your verifiable
            consumer request unless it is excessive, repetitive, or manifestly
            unfounded. If we determine that the request warrants a fee, we will
            tell you why we made that decision and provide you with a cost
            estimate before completing your request.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Personal Information Sales Opt-Out and Opt-In Rights</h2>
          <p>
            If you are age 16 or older, you have the right to direct us not to
            sell your personal information at any time (the "right to opt-out").
            We do not sell the personal information of consumers we actually
            know are less than 16 years old, unless we receive affirmative
            authorization (the "right to opt-in") from either the consumer who
            is between 13 and 15 years old, or the parent or guardian of a
            consumer less than 13 years old. Consumers who opt-in to personal
            information sales may opt-out of future sales at any time.
          </p>
          <p>
            To exercise the right to opt-out, you (or your authorized
            representative) may submit a request to us by visiting the following
            Internet Web page link:
          </p>
          <p className={styles.optOutLink}>
            <Link to='/ccpa-do-not-sell'>
              Do Not Sell My Personal Information
            </Link>
          </p>
          <p>
            Once you make an opt-out request, we will wait at least twelve (12)
            months before asking you to reauthorize personal information sales.
            However, you may change your mind and opt back into personal
            information sales at any time by contacting us at {APP_EMAIL}.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Changes to Our Privacy Policy</h2>
          <p>
            We reserve the right to amend this privacy policy at our discretion
            and at any time. When we make changes to this privacy policy, we
            will post the updated notice on the Website and update the notice's
            effective date.{' '}
            <span className={styles.boldText}>
              Your continued use of our Website following the posting of changes
              constitutes your acceptance of such changes
            </span>
            .
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>Contact Information</h2>
          <p>
            If you have any questions or comments about this notice, about the
            way we collect information and the type of information we collect,
            please do not hesitate to contact us at:
          </p>
          <address className={styles.contactInfo}>
            <p>{APP_NAME}</p>
            <p>{APP_OWNER}</p>
            <p>
              <span className={styles.boldText}>Website</span>: {APP_URL}
            </p>
            <p>
              <span className={styles.boldText}>Email</span>: {APP_EMAIL}
            </p>
          </address>
          <p>
            If you need to access this Policy in an alternative format due to
            having a disability, please contact {APP_EMAIL}.
          </p>
        </section>

        <div className={styles.legalFooter}>
          <p>EFFECTIVE AS OF {LEGAL_EFFECTIVE_DATE}</p>
        </div>
      </div>
    </div>
  );
}

export default CCPA;
