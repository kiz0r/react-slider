import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  slideFrame,
  slideCaption,
  slideImage,
  slideDescription,
  showed,
} from './SlideFrame.module.sass';
import defaultImage from './defaultImage.jpg';
import classNames from 'classnames';

const SliderFrame = ({ slide: { title, description, src } }) => {
  const [isHovered, setIsHovered] = useState(false);

  const captionClassName = classNames(
    slideCaption,
    `${isHovered ? showed : ''}`
  );

  return (
    <figure
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={slideFrame}
    >
      <img className={slideImage} src={src ?? defaultImage} alt={title} />
      <figcaption className={captionClassName}>
        <h3>{title ?? 'The image title is missing'}</h3>
        {isHovered && (
          <p className={slideDescription}>
            {description ?? 'The image description is missing'}
          </p>
        )}
      </figcaption>
    </figure>
  );
};

SliderFrame.propTypes = {
  slide: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
};

export default SliderFrame;
