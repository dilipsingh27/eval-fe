import React from 'react';
import './Filter.css';
import makeRequest from '../../utils/makeRequest';
import { GET_EVENTS } from '../../constants/apiEndpoints';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faFilter,
    faChevronUp,
    faCircleDot,
    faCircle,
    faBookmark,
  } from '@fortawesome/free-solid-svg-icons';
  import { faCircle as faHollowCircle } from '@fortawesome/free-regular-svg-icons';


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

    const handleBookmark = () => {
        makeRequest(GET_EVENTS,{})
            .then((response) => {
                const bookmarkedEvent = response.filter(eachEvent => {
                    if(eachEvent.isBookmarked)
                        return eachEvent;
                });
                // setAllRegisteredEvents(registeredEvent);
                setAllEvents(bookmarkedEvent);
            })
            .catch(() => {

            });
    };

    const handleSeat = () => {
        makeRequest(GET_EVENTS,{})
            .then((response) => {
                const seatAvailableEvent = response.filter(eachEvent => {
                    if(eachEvent.areSeatsAvailable)
                        return eachEvent;
                });
                // setAllRegisteredEvents(registeredEvent);
                setAllEvents(seatAvailableEvent);
            })
            .catch(() => {
            
            });
    };

    return (
        <div className='filter-container'>

            <div className="filter-area">
                <div className="filter">
                    <div className="filter-icon">
                        <FontAwesomeIcon icon={faFilter} />
                    </div>
                    <div className="filter-text">
                        <p>FILTER</p>
                    </div>
                    <div className="filter-chevron">
                        <FontAwesomeIcon icon={faChevronUp} />
                    </div>
                </div>

                <div className="search-input">
                    <div className="search-text">
                        <input type="search" />
                    </div>
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>

        <div className="filter-options">
            <div className="filter-left">
                <div className="filter-all">
                    <div onClick={ handleAll} className="filter-left-icon">
                        <FontAwesomeIcon icon={faCircleDot} />
                    </div>
                    <div className="filter-left-text">
                        <p>ALL</p>
                    </div>
                </div>
                <div onClick={handleRegister} className="filter-registered">
                    <div className="filter-left-icon">
                        <FontAwesomeIcon icon={faHollowCircle} />
                    </div>
                    <div className="filter-left-text">
                        <p>REGISTERED</p>
                    </div>
                </div>
                
            </div>

            <div className="filter-right">
                <div onClick={handleBookmark} className="filter-bookmarked">
                    <div className="filter-right-text">
                        <p>BOOKMARKED</p>
                    </div>
                    <div className="filter-right-icon">
                        <FontAwesomeIcon icon={faHollowCircle} />
                    </div>
                </div>
                <div onClick={handleSeat} className="filter-seat-available">
                    <div className="filter-right-text">
                        <p>BOOKMARKED</p>
                    </div>
                    <div className="filter-right-icon">
                        <FontAwesomeIcon icon={faHollowCircle} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
                
                 {/* <button onClick={handleAll}><i className="fa-solid fa-circle-dot"></i>{' '}ALL</button>
                <button onClick={handleRegister}><i className="fa-regular fa-circle"></i>{' '}REGISTERED</button>
            
        
            <div className="search-area">
                <input type="search" />
                <button onClick={handleBookmark}>BOOKMARKED</button>
                <button onClick={handleSeat}>SEAT AVAILABLE</button>
            </div>
        
        </div>
    );
}; */}

{/* Filter.propTypes = {
    setAllEvents: PropTypes.func,
}; */}

export default Filter;
