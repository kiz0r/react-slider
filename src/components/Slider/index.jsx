import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { sliderContainer, fullscreen } from './Slider.module.sass';
import SliderControlPanel from '../SliderControlPanel';
import SliderFrame from '../SlideFrame';
import classNames from 'classnames';

const Slider = ({ slides }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [delay, setDelay] = useState(5000); // 5000ms = default delay for slides swapping
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // current slide index
  const [isFullScreen, setIsFullScreen] = useState(false);

  const incrementSlideIndex = () => {
    setCurrentSlideIndex(
      (currentSlideIndex) => (currentSlideIndex + 1) % slides.length
    );
  };

  const decrementSlideIndex = () => {
    setCurrentSlideIndex(
      (currentSlideIndex) =>
        (currentSlideIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    let timerId = null;
    if (!isPaused && !timerId) {
      timerId = setTimeout(() => {
        incrementSlideIndex();
      }, delay);
    }
    return () => {
      clearTimeout(timerId);
      timerId = null;
    };
  }, [isPaused, delay, currentSlideIndex]);

  const sliderContainerClassName = classNames(sliderContainer, {
    [fullscreen]: isFullScreen,
  });

  return (
    <div className={sliderContainerClassName}>
      <SliderFrame slide={slides[currentSlideIndex]} />
      <SliderControlPanel
        isPaused={[isPaused, setIsPaused]}
        delay={[delay, setDelay]}
        incrementSlideIndex={incrementSlideIndex}
        decrementSlideIndex={decrementSlideIndex}
        isFullScreen={[isFullScreen, setIsFullScreen]}
      />
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      src: PropTypes.string,
    })
  ).isRequired,
};

export default Slider;
