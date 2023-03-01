import React from 'react';
import { Header} from './components';
import AllCards from './screens/AllCards';
import EventDetails from './screens/EventDetails';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/allEvents" element={<AllCards/>}/>
                    <Route path={'/allEvents/:id'} element={<EventDetails/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
