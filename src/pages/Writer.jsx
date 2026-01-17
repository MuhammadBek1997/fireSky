import "../style/Write.css";

const Write = () => {
    return (
        <div className="program">
            <h2 className="program-title">Программа вечера</h2>
            <p className="program-subtitle">
                От первых аккордов до финального залпа — вечер будет насыщенным.
            </p>

            <div className="program-cards">
                <div className="card">
                    <span className="time">18:00 – 19:00</span>
                    <h3>Открытие фестиваля и welcome-зона</h3>
                    <p>
                        Встреча гостей, работа фудкорта, фотозоны, детские активности и
                        музыка от диджея.
                    </p>
                </div>

                <div className="card">
                    <span className="time">19:00 – 20:30</span>
                    <h3>Живой концерт и интерактив</h3>
                    <p>
                        Выступления кавер-групп, конкурсы от ведущего, розыгрыши призов от
                        партнеров фестиваля.
                    </p>
                </div>

                <div className="card">
                    <span className="time">20:30 – 21:15</span>
                    <h3>Пиротехническое шоу команд</h3>
                    <p>
                        Серия фейерверков от разных команд — каждая представляет свою
                        уникальную программу. Зрители голосуют за фаворита.
                    </p>
                </div>

                <div className="card">
                    <span className="time">21:30 – 21:45</span>
                    <h3>Гран-финал FireSky</h3>
                    <p>
                        Объединённое пиромузыкальное шоу — мощный финальный залп, который
                        осветит небо над городом.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Write