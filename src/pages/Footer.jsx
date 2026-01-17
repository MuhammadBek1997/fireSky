import '../style/Footer.css'

const Footer = () => {
    return (
        <>

            <div className='footer'>
                <div className='footer-1'>
                    <div className='footer-text'>
                        <h2>
                            Контакты и локация
                        </h2>
                        <p>
                            Остались вопросы? Свяжитесь с нами или приезжайте прямо в парк.
                        </p>

                    </div>
                    <div className='footer-info'>
                        <div className='footer-info-item'>
                            <h4>
                                <span className='color'>Место проведения:</span> Место проведения: парк «Flowers Garden», г. Ташкент
                            </h4>
                            <h4>
                                <span className='color'>Дата и время: </span>12 июля 2025, 18:00 – 22:00
                            </h4>
                            <h4>
                                <span className='color'>Телефон оргкомитета:</span>  +998 (90) 123-45-67
                            </h4>
                            <h4>
                                <span className='color'>Электронная почта:</span>  info@fireskyfest.uz
                            </h4>
                            <h4>
                                <span className='color'>Соцсети:</span>
                            </h4>
                            <h4>
                                • Telegram: @FireSkyFest

                            </h4>
                            <h4>
                                • Instagram: @firesky_festival
                            </h4>
                            <p>
                                Для партнёрства и корпоративных заявок напишите на почту или в Telegram — мы
                                предложим специальные условия.
                            </p>
                        </div>
                        <div >
                            <img src="public/images/Iframe.png" alt="" />
                        </div>

                    </div>


                </div>

                <div className='footer-2'>
                    <div className='footer-2-text'>
                        <h2>
                            Успейте забронировать билеты на FireSky 2025!
                        </h2>
                        <p>
                            При онлайн-покупке до 30 июня действует промокод FIRE15 на скидку 15%.
                        </p>
                    </div>

                    <div className='footer-2-1'>
                        <button>
                            Забронировать сейчас

                        </button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Footer