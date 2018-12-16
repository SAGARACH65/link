import React from 'react';
import PropTypes from 'prop-types';

function linkDetails(props) {
  const tags = ['Javascript', 'Machine Learning', 'Football'];
  const { title, url, image_url, created_by, description } = props.link;

  return (
    <div className='link-details-container'>
      <img src={image_url} alt='NA' className='link-details-image' />

      <div className='link-details-text'>
        <a target='blank' href={url} style={{ textDecoration: 'none' }}>
          <p className='link-details-title link-details'>{title}</p>
        </a>

        <p className='link-details-description link-details'>{description}</p>

        <p className='link-details-posted-by link-details'>
          shared by {created_by}
        </p>

        {tags.map(tag => (
          <span class='left tag tag--xsm link-details'>{tag}</span>
        ))}
      </div>
    </div>
  );
}

linkDetails.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default linkDetails;
