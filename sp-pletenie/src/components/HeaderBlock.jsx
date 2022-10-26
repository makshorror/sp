import React from 'react';
import logoWhite from '../assets/img/logoWhite.png'
import basket from '../assets/img/basket.png'

let basketCount = 0;

const HeaderBlock = () => {
    return (
        <div>
            <header className="header">
                <div className="navContainer">
                    <div className="navWrapper">
                        <div className="logos">
                            <img className={'logo'}
                                alt={"logo"}
                                src={logoWhite}/>
                        </div>
                        <div className="nav">
                            <ul className="navItems">
                                <li className="navItem"><button id="main">Главная</button></li>
                                <li className="navItem"><button id="about">Обо мне</button></li>
                                <li className="navItem"><button id="catalog">Каталог</button></li>
                                <li className="navItem"><button id="media">Медиа</button></li>
                                <li className="navItem"><button id="question">Вопросы</button></li>
                                <li className="navItem"><button id="contacts">Контакты</button></li>
                            </ul>
                        </div>
                        <div className="basketWrapper">
                            <img className={'basket'}
                                    alt={"basket"}
                                    src={basket}/>
                            <div className="basketCount">{basketCount}</div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderBlock;