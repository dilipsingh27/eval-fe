import React, { useEffect,useState } from 'react';
import { Card } from '../../components';
import './EventDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest';
import { GET_EVENT_BY_ID } from '../../constants/apiEndpoints';


const EventDetails = () => {

    const {id} = useParams();
    const [eventDetails,setEventDetails] = useState({});
    const navigate = useNavigate();
  
    useEffect(() => {
        makeRequest(GET_EVENT_BY_ID(id), {},navigate)
            .then((response) => {
                setEventDetails(response);
                console.log(eventDetails);
            });
    }, []);

    return (
        <div className="appContainer">
            <div className='eventDetailContainer'>
                <Card 
                    key={eventDetails.id}
                    id={eventDetails.id}
                    name={eventDetails.name}
                    description={eventDetails.description}
                    venue={eventDetails.venue}
                    datetime={eventDetails.datetime}
                    imgUrl={eventDetails.imgUrl}
                />
            </div>
        </div>
    );
};
export default EventDetails;






