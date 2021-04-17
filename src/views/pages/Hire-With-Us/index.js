import React from 'react'
import TopMain from "./TopMain";
import Developer from '../HireWithUsView/Developer/Developer';
import HireAtEase from "./HireAtEase";
import Major from '../HireWithUsView/Major/Major';
import Philosphy from '../HireWithUsView/Philosphy/Philosphy';
import Footer from '../common/Footer';

function HIRE_WITH_US() {
    return (
        <div>
            <TopMain />

            <Developer />
            <HireAtEase />
            <Philosphy />
            <Major />
            <Footer />
        </div>
    )
}

export default HIRE_WITH_US
