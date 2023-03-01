import { Card,Filter } from '../../components';
import React from 'react';
import './AllCards.css';
import { GET_EVENTS } from '../../constants/apiEndpoints';
import { useEffect,useState } from 'react';
import makeRequest from '../../utils/makeRequest';
import { useNavigate } from 'react-router-dom';

const AllCards = () => {
    const [allEvents,setAllEvents] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        makeRequest(GET_EVENTS, {},navigate)
            .then((response) => {
                // console.log(response);
                setAllEvents(response);
            })
            .catch(() => {

            });
    }, []);

    console.log(allEvents);
    return (
        <div className="cards-container">
            <Filter setAllEvents={setAllEvents}/>
            {
                // allSong.map((song,index) => {
                allEvents.map((event) => {
                    return (<Card 
                       
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        description={event.description}
                        venue={event.venue}
                        datetime={event.datetime}
                        imgUrl={event.imgUrl}
                            
                    />
                    );
                })
            }
        </div>
    );
};

export default AllCards;