import React from 'react';
import './Filter.css';
import makeRequest from '../../utils/makeRequest';
import { GET_EVENTS } from '../../constants/apiEndpoints';
// import { useState } from 'react';
import PropTypes from 'prop-types';

const Filter = ({setAllEvents}) => {
    // const [allRegisteredEvents,setAllRegisteredEvents] = useState();


    const handleRegister = () => {
        makeRequest(GET_EVENTS,{})
            .then((response) => {
                const registeredEvent = response.filter(eachEvent => {
                    if(eachEvent.isRegistered)
                        return eachEvent;
                });
                // setAllRegisteredEvents(registeredEvent);
                setAllEvents(registeredEvent);
            })
            .catch(() => {

            });
        
    };

    const handleAll = () => {
        makeRequest(GET_EVENTS,{})
            .then((response) => {
                setAllEvents(response);
            })
            .catch(() => {

            });
        
    };

    return (
        <div className='filter-container'>
            <div className="filter-area">
                
            
                <button><i className="fa-solid fa-chevron-up"></i>{' '}FILTER</button>
                <button onClick={handleAll}><i className="fa-solid fa-circle-dot"></i>{' '}ALL</button>
                <button onClick={handleRegister}><i className="fa-regular fa-circle"></i>{' '}REGISTERED</button>
            
            </div>
            <div className="search-area">
                <input type="search" />
                <button>BOOKMARKED</button>
                <button>SEAT AVAILABLE</button>
            </div>
        </div>
    );
};

Filter.propTypes = {
    setAllEvents: PropTypes.func,
};

export default Filter;
