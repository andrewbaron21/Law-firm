import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NotFound from '../containers/NotFound';
import PublicHome from '../containers/PublicHome/index.js'

function PublicRoutes() {
    return (
        <section>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="*" element={<NotFound />} /> */}
                    <Route exact path="/" element={<PublicHome />} />
                    <Route index element={<PublicHome />} />
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default PublicRoutes;
