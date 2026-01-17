import './style/Ticket.css'

const Ticket = () => {
    return (
        <>
            <section className='ticket'>

                <div className='ticket-cont'>
                    <h1>
                        Билеты на фестиваль
                    </h1>
                    <p>
                        Выберите формат участия и забронируйте билеты онлайн со скидкой.
                    </p>
                </div>

                <div className='order'>

                    <div className='one'>

                        <div>
                            <button>
                                <h4>
                                    Стандарт
                                </h4>
                                <span className='color'>
                                    <h2>
                                        120 000 сум
                                    </h2>
                                </span>
                                <p>
                                    Вход на территорию фестиваля, доступ к
                                    фудкорту и общим площадкам для
                                    просмотра шоу.
                                </p>
                                <div className='order-cont'><button><p>Доступно онлайн</p></button></div>
                            </button>
                        </div>

                    </div>

                    <div className='two'>

                        <div>
                            <button>
                                <h4>
                                    Комфорт
                                </h4>
                                <span className='color'>
                                    <h2>
                                        170 000 сум
                                    </h2>
                                </span>
                                <p>
                                    Улучшенная зона просмотра, отдельная
                                    линия входа, приветственный
                                    безалкогольный напиток.
                                </p>
                                <div className='two-cont'>
                                    <div className='order-cont'><button><p>Доступно онлайн</p></button></div>
                                    <div className='order-cont'><button><p>Скидка 15% онлайн</p></button></div>
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className='there'>

                        <div>
                            <button>
                                <h4>
                                    Семейный
                                </h4>
                                <span className='color'>
                                    <h2>
                                        390 000 сум
                                    </h2>
                                </span>
                                <p>
                                    Пакет для 2 взрослых и 2 детей,
                                    приоритетный вход и уютная зона для
                                    просмотра.
                                </p>
                                <div className='order-cont'><button><p>Лучшее для семьи</p></button></div>
                            </button>
                        </div>

                    </div>

                    <div className='four'>

                        <div>
                            <button>
                                <h4>
                                    VIP
                                </h4>
                                <span className='color'>
                                    <h2>
                                        290 000 сум
                                    </h2>
                                </span>
                                <p>
                                    VIP-зона с лучшим видом, отдельный
                                    вход, приветственный набор и отдельная
                                    зона отдыха.
                                </p>
                                <div className='order-cont'><button><p>Ограниченное количество</p></button></div>

                            </button>
                        </div>

                    </div>
                </div>

                <div className='login'>
                    <button>
                        <div className='login-cont'>
                            <h4>Заявка на бронирование билета</h4>
                            <p>Оставьте ваши данные, и наш оператор свяжется с вами для
                                подтверждения и отправит e-ticket.</p>
                        </div>

                        <div className=''>
                            <h4>Имя и фамилия *</h4>
                            <input type="text" placeholder='Например, Zafar Mirzaulukov' />
                        </div>

                        <div className=''>
                            <h4>Телефон *</h4>
                            <input type="text" placeholder='+998 (__) ___-__-__' />
                        </div>

                        <div className=''>
                            <h4>Тип билета *</h4>
                            <input type="text" placeholder='Выберите вариант...' />
                        </div>

                        <div className=''>
                            <h4>Количество билетов *</h4>
                            <input type="text" placeholder='2' />
                        </div>
                        <div className='send'><button>Отправить заявку</button></div>
                        <div className='send-cont'>
                            <p>
                                При онлайн-оплате будет применена скидка 15%
                                от базовой стоимости
                                билетов.
                            </p>
                        </div>
                    </button>
                </div>


            </section >
        </>
    )
}

export default Ticket