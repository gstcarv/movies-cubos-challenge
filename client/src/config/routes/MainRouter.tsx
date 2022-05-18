import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BaseLayout from '../../components/Layout/BaseLayout';

import MoviesSearch from '../../pages/MoviesSearch';

function MainRouter() {
    return (
        <BrowserRouter>
            <BaseLayout>
                <Routes>
                    <Route path='/' element={<MoviesSearch />} />

                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BaseLayout>
        </BrowserRouter>
    );
}

export default MainRouter;
