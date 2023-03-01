import { render,screen } from '@testing-library/react';
import Header from '..'
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => { 
    it('should render without crashing', () => {
        render(<BrowserRouter><Header/></BrowserRouter> );
        const appElement = screen.getByText('EVENTIFY',{exact:false});
        expect(appElement).toBeInTheDocument();
    });
});

describe('Header Snapshot', () => {
    it('should render forming a snapshot', () => {
        const { asFragment } = render(<BrowserRouter><Header/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot(); 
    });
});