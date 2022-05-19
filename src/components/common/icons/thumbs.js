import React from 'react';

import ThumbUpImage from '../../../assets/images/thumbs-up.svg';
import ThumbDownImage from '../../../assets/images/thumbs-down.svg';

const ThumbUpIcon = ({ altText = '' }) => <img src={ThumbUpImage} alt={altText} />;
const ThumbDownIcon = ({ altText = '' }) => <img src={ThumbDownImage} alt={altText} />;

export { ThumbUpIcon, ThumbDownIcon };
