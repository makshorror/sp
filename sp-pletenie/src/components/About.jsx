import React from 'react';
import ava2 from '../assets/img/ava2.jpg'
import tikTok from '../assets/img/tikTokLogo.png'
import inst from '../assets/img/inst.png'
import Home from '../assets/img/home.png'

const About = () => {
    
    return (
        <div>
            <section className='about' id='about'>
            <div className="homeWrapper">
                        <img className={'home'}
                                        alt={"back home"}
                                        src={Home}/>
                    </div>
                <div className="container">
                    <div className="contactsWrapper">
                    <a rel='noreferrer' href="https://www.tiktok.com/@savitskaya19.07.0?_t=8WrdLVQyhVu&_r=1" target="_blank"><img className={'tikTok'}
                                    alt={"tik tok"}
                                    src={tikTok}/></a>

                    <a rel='noreferrer' href="https://instagram.com/savitskaya_pletenie?igshid=YmMyMTA2M2Y=" target="_blank"><img className={'inst'}
                                    alt={"instagram"}
                                    src={inst}/></a>
                    </div>
                    <h3 className='aboutMe'>ОБО МНЕ</h3>
                    <div className="textWrapper">
                        <div className="firstWrap">
                            <p className='text1'>У меня появилась мечта приобрести большой короб-сундук. И я начала поиски. Магазины не удовлетворили мои желания. А мне хотелось, чтобы короб был большой и обязательно плетёный.<br/><br/> Про бумажную лозу я тогда еще не знала, но в небольшом магазинчике подарков я увидела плетёные изделия и не могла понять из чего они сделаны... Лоза? Кожа?<br/><br/>  Узнавая про них у продавца я получила контакты мастера по плетению из бумажной лозы и ответ на свой вопрос, который меня удивил и очень заинтересовал.<br/><br/> У меня не сложилось с заказом, но я вникать, изучать, смотреть уроки по азам плетения. в Общем я взяла всё в свои руки. И в скоре в моём доме и в доме моих друзей начали появляться корзиночки, коробочки, хлебницы, подносы и разные мелочи из бумажной лозы.<br/><br/>  Я набралась мастерства и заветный сундук стоит у меня дома. Больше остановить уже было не возможно. Мне хотелось плести что-то новое и я была уверена, что это моё новое увлечение, хобби, будет расти и развиваться.</p>
                        </div>
                        <div className="secondWrap">
                        <img className={'ava2'}
                                    alt={"Avatar 2"}
                                    src={ava2}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;