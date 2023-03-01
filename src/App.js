import React from 'react';
import { Header} from './components';
import AllCards from './screens/AllCards';
import EventDetails from './screens/EventDetails';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Footer from './components/Footer';
import ErrorPage from './screens/ErrorPage';
import PageNotFound from './screens/PageNotFound';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/allEvents" element={<AllCards/>}/>
                    <Route path={'/allEvents/:id'} element={<EventDetails/>} />
                    <Route path="/error/:errorCode?" element={<ErrorPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    );
};

export default App;
