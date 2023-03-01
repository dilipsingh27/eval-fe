import makeRequest from '..';
import axios from 'axios';

import {
    BACKEND_URL,
    GET_EVENTS,
} from '../../../constants/apiEndPoints';

jest.mock('axios');

const mockData = {
        data: [ {
            id: '1',
            name: 'Battle of the Bands',
            description:'Get ready for Battle of the Bands',
            venue: 'All Stars Arena, Las Vegas, NV, USA',
            datetime: '2023-03-01T05:00:00.000Z',
            timezone: 'America/Los_Angeles',
            areSeatsAvailable: true,
            isRegistered: true,
            isBookmarked: true,
            imageUrl:'https://i.ibb.co/3zbdvWX/battle-of-bands.jpg'
        },
    ]
};

describe('makeRequest', () => {

    it('should make api call when only api endpoint is passed', async () => {
        const mockedAxios = axios.mockResolvedValue({ data: mockData });
        expect(mockedAxios).not.toBeCalled();
        const response = await makeRequest(GET_EVENTS);
        expect(mockedAxios).toHaveBeenCalledTimes(1);
        expect(mockedAxios).toHaveBeenCalledWith({
            baseURL: BACKEND_URL,
            url: '/api/events',
            method: 'get',
        });
        expect(response).toEqual(mockData);
    });
});