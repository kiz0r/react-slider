import PropTypes from 'prop-types';
import {
  FaPause,
  FaPlay,
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaExpand,
  FaCompress,
} from 'react-icons/fa';
import { controlPanel, btnWrapper } from './SliderControlPanel.module.sass';
import MyButton from '../../UI/MyButton';

const SliderControlPanel = ({
  isPaused: [isPaused, setIsPaused],
  delay: [delay, setDelay],
  incrementSlideIndex,
  decrementSlideIndex,
  isFullScreen: [isFullScreen, setIsFullScreen],
}) => {
  const pauseHandler = () => {
    setIsPaused(!isPaused);
  };

  const fullScreenHandler = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={controlPanel}>
      <div className={btnWrapper}>
        <MyButton onClick={decrementSlideIndex}>
          <FaArrowCircleLeft />
        </MyButton>
        <MyButton onClick={pauseHandler}>
          {isPaused ? <FaPlay /> : <FaPause />}
        </MyButton>
        <MyButton onClick={incrementSlideIndex}>
          <FaArrowCircleRight />
        </MyButton>
        <MyButton
          style={{ justifyContent: 'flex-end' }}
          onClick={fullScreenHandler}
        >
          {isFullScreen ? <FaCompress /> : <FaExpand />}
        </MyButton>
      </div>
      <label>
        <span>Set Delay (in ms) : </span>
        <input
          type="number"
          value={delay}
          min={1000}
          step={1000}
          onChange={({ target: { value } }) =>
            value >= 1000 ? setDelay(value) : setDelay(1000)
          }
        />
      </label>
    </div>
  );
};

SliderControlPanel.propTypes = {
  isPaused: PropTypes.arrayOf(PropTypes.any).isRequired,
  delay: PropTypes.arrayOf(PropTypes.any).isRequired,
  incrementSlideIndex: PropTypes.func.isRequired,
  decrementSlideIndex: PropTypes.func.isRequired,
  isFullScreen: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SliderControlPanel;
