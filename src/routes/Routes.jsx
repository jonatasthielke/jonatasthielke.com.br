import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import About from '../pages/About';

function RoutesComponent() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About />} />
                {/* <Route path="users" element={<Users />}>
                    <Route path="me" element={<OwnUserProfile />} />
                    <Route path=":id" element={<UserProfile />} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    </>);
}

export default RoutesComponent;