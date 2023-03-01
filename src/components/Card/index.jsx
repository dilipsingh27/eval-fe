import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import { useNavigate } from 'react-router-dom';


const Card = ({id,name,imgUrl,description,venue,datetime}) => {

    const navigate = useNavigate();
    const navigateDetails = () => {
        navigate(`/allEvents/${id}`,{
            state: {
                event:{
                    id,
                    name,
                    imgUrl,
                    description,
                    venue,
                    datetime
                }
            }});
    };

    return (
        
        <div className='card' onClick={navigateDetails}>
            {/* <div className="image-holder"> */}
            <img src={imgUrl} alt="" />
            {/* </div> */}
            <div className="card-content">
                <div className="card-title">
                    <p>{name}</p>
                </div>
                <div className="card-description">
                    <p>{description}</p>
                </div>
                <div className="card-venue-date">
                    <p>VENUE: {venue}</p>
                    <p>DATE: {getFormattedDateFromUtcDate(datetime)}</p>
                </div>
                <div className="card-booking">
                    <p><i className="fa fa-circle-check"></i>Registered</p>
                    <i className="fa-regular fa-bookmark"></i>
                </div>
            </div>
            
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    description: PropTypes.string,
    venue: PropTypes.string,
    datetime: PropTypes.string,
};

export default Card;