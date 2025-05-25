import styles from './hero.module.css';

const HeroSection = ({ heading, description, CTA, imgSource, imgAlt }) => {
  return (
    <section
      className={styles.hero}
      id='hero'
    >
      <h1>{heading}</h1>
      <p>{description}</p>
      <button className='btn-primary'>{CTA}</button>
      <div className={styles.heroImg}>
        <img
          src={imgSource}
          alt={imgAlt}
        />
      </div>
    </section>
  );
};

export default HeroSection;
