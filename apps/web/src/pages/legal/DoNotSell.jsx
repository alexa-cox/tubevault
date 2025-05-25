import React, { useState } from 'react';
import Button from '../../components/common/Button';
import {
  APP_EMAIL,
  APP_NAME,
  LEGAL_EFFECTIVE_DATE,
} from '../../utils/appConstants';
import styles from './legal.module.css';

function DoNotSell() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the opt-out request to your backend
    console.log('Opt-out request submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <div className={styles.rightEdge}></div>
        <div className={styles.rightEdgeHoles}></div>
        <h1 className={styles.legalTitle}>
          Do Not Sell My Personal Information
        </h1>

        <section className={styles.legalSection}>
          <p>
            Under the California Consumer Privacy Act (CCPA), California
            residents have the right to opt-out of the sale of their personal
            information to third parties.
          </p>
          <p>
            {APP_NAME} values your privacy. While we do not sell personal
            information in the traditional sense, the CCPA defines "sale"
            broadly to include the sharing of personal information with third
            parties for valuable consideration, which may include some of our
            data sharing practices.
          </p>
          <p>
            To exercise your right to opt-out of the sale of your personal
            information, please complete the form below.
          </p>
        </section>

        {formSubmitted ? (
          <section className={styles.legalSection}>
            <div className={styles.confirmationMessage}>
              <h2>Request Received</h2>
              <p>
                Thank you for submitting your request. We have received your
                opt-out request and will process it within the timeframe
                required by law. You will receive a confirmation email shortly.
              </p>
              <p>
                If you have any questions about your request, please contact us
                at {APP_EMAIL}.
              </p>
            </div>
          </section>
        ) : (
          <section className={styles.legalSection}>
            <form
              onSubmit={handleSubmit}
              className={styles.optOutForm}
            >
              <div className={styles.formGroup}>
                <label htmlFor='name'>Full Name *</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='Enter your full name'
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='email'>Email Address *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='Enter your email address'
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='requestDetails'>Additional Information</label>
                <textarea
                  id='requestDetails'
                  name='requestDetails'
                  value={formData.requestDetails}
                  onChange={handleChange}
                  placeholder='Please provide any additional details about your request'
                  rows='4'
                />
              </div>

              <div className={styles.formDisclaimer}>
                <p>
                  By submitting this form, you are confirming that you are a
                  California resident and would like to opt-out of the sale of
                  your personal information as defined under the CCPA.
                </p>
              </div>

              <div className={styles.formActions}>
                <Button
                  type='submit'
                  variant='primary'
                >
                  Submit Opt-Out Request
                </Button>
              </div>
            </form>
          </section>
        )}

        <section className={styles.legalSection}>
          <h2>Additional Information</h2>
          <p>
            Please note that submitting this form will not remove you from our
            services or delete your account. It will only opt you out of the
            sale of your personal information as defined by the CCPA.
          </p>
          <p>
            If you would like to delete your account or request deletion of your
            personal information, please visit our{' '}
            <a href='/privacy'>Privacy Policy</a> for more information on how to
            submit those requests.
          </p>
          <p>
            For more information about your privacy rights under the CCPA,
            please see our
            <a href='/ccpa'> California Consumer Privacy Act Notice</a>.
          </p>
        </section>

        <div className={styles.legalFooter}>
          <p>EFFECTIVE AS OF {LEGAL_EFFECTIVE_DATE}</p>
        </div>
      </div>
    </div>
  );
}

export default DoNotSell;
