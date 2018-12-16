import React from 'react';
import PropTypes from 'prop-types';

function linkDetails(props) {
    const {title,url,image_url,created_by,description}=props.link;
   console.log(title,url,image_url,created_by,description )
    return (
    <div className="link-details">
     
            {/* <div className="left block-set__list--left">Status</div>
            <div className="left block-set__list--right">
              <span className="icon-status icon-status--green"></span>Healthy
            </div> */}
            <div>

                </div>
                <div>
                    </div>
         
    </div>
  )
}

linkDetails.propTypes = {
    title: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired, 
    image_url: PropTypes.string.isRequired, 
    created_by: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
}

export default linkDetails;


