import classNames from 'classnames';
import { useState } from 'react';
import styles from './faq.module.css';
import { FAQS } from './text/faq';

const FaqSection = () => {
  const [activeFaqItem, setActiveFaqItem] = useState(null);

  const toggleFaqItem = (index) => {
    setActiveFaqItem(activeFaqItem === index ? null : index);
  };

  return (
    <section
      className={styles.faq}
      id='faq'
    >
      <div className='sectionTitle'>
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about FocusView</p>
      </div>

      <div className={styles.faqContainer}>
        {FAQS.map((faq, index) => (
          <div
            className={classNames('faqItem', {
              active: activeFaqItem === index,
            })}
            key={index}
          >
            <div
              className={styles.faqQuestion}
              onClick={() => toggleFaqItem(index)}
            >
              <h3>{faq.question}</h3>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
