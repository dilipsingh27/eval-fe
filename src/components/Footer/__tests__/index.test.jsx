import { render,screen } from '@testing-library/react';
import Footer from '..'
import { BrowserRouter } from 'react-router-dom';

describe('Footer', () => { 
    it('should render without crashing', () => {
        render(<BrowserRouter><Footer/></BrowserRouter> );
        const appElement = screen.getByText('THEMES',{exact:false});
        expect(appElement).toBeInTheDocument();
    });
});

describe('Footer Snapshot', () => {
    it('should render forming a snapshot', () => {
        const { asFragment } = render(<BrowserRouter><Footer/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot(); 
    });
});