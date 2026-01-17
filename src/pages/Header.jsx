import "../style/Header.css"

const Header = () => {
   return (
      <>
         <div className="nav-color">
            <div className="nav">
               <div className="nav-list">
                  <img src="/images/hhg.png" alt="" />
                  <h2>О фестивале</h2>
                  <h2>Программа</h2>
                  <h2>Билеты</h2>
                  <h2> Фото</h2>
                  <h2>Инфо</h2>
                  <h2>Контакты</h2>
               </div>
               <div className="nav-cont">
                  <h2>
                     12 июля 2025
                  </h2>
                  <h2>
                     Ташкент, городской парк
                  </h2>
               </div>
            </div>
            <div className="hero-list">
               <h2>
                  Ежегодный фестиваль фейерверков
               </h2>
               <h3>
                  Самое яркое шоу лета —
               </h3>
               <h4>
                  FireSky 2025
               </h4>
               <h5>
                  2025
               </h5>
               <h6>
                  Один вечер, десятки фейерверков, пиромузыкальное шоу и
                  тысячи огней в небе над городом. Берите друзей и семью —
                  эмоций хватит на весь год!
               </h6>
            </div>
            <div className="hero-list-mk">
               <h2>
                  🎆 Пиромузыкальное шоу
               </h2>
               <h2>
                  🎤 Живой концерт
               </h2>
               <h2>
                  🍔 Фудкорт
               </h2>
               <h2>
                  👧 Семейный формат
               </h2>
            </div>
            <div className="hero-list-hg">
               <button>
                  Купить билеты
               </button>
               <div className="button-1">
                  <button>
                     Смотреть программу
                  </button>
               </div>

            </div>
            <div className="hero-logo" >
               <img src="/images/hbg.png" alt="" />
            </div>
         </div>
      </>
   )
}

export default Header