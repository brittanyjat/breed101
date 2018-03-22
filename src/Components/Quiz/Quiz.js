import React from 'react';
import MainHeader from './../Header/Header';
import router from './QuizRoutes';

export default () => {
    return (
        <div>
            <MainHeader />
            {router}
        </div>
    )
}