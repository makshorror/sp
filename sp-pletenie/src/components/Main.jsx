import React from 'react';
import Avatar from '../assets/img/ava.jpg'
import Arrow from '../assets/img/arrowDown.png'
const Main = () => {
    return (
        <div>
            <main className="main">
                <div className="container">
                    <img className={'ava'}
                                    alt={"avatar"}
                                    src={Avatar}/>
                    <h1 className='svetlana'>СВЕТЛАНА САВИЦКАЯ</h1>
                    <div className="hr">
                    </div>
                    <span className="description">Плетение из бумажной лозы</span>
                    <img className={'arrow'}
                                    alt={"arrow down"}
                                    src={Arrow}/>
                </div>
            </main>
        </div>
    );
};

export default Main;