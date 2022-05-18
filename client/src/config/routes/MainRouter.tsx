import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;
