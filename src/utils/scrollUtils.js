const scrollToSection = (sectionId, offset = 0) => {
  if (!sectionId || typeof sectionId !== 'string') {
    console.error(
      'scrollToSection requires a valid sectionID string',
      sectionId
    );
    return;
  }

  const target = document.getElementById(sectionId);
  if (!target) {
    console.error('Target does not exist', target);
    return;
  }

  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset;

  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo(0, targetPosition - offset);
  }
};

export { scrollToSection };
