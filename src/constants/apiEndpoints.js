export const GET_EVENTS = {
    url: '/api/events',
    method: 'get'
};
  
export const GET_EVENT_BY_ID = (eventID) => ({
    url: `/api/events/${eventID}`,
    method: 'get',
});
  
export const UPDATE_EVENT_BY_ID = (eventID) => ({
    url: `/api/events/${eventID}`,
    method: 'patch',
});

export const BACKEND_URL = 'http://localhost:8000/';