import { cards } from '../data'
function Cards() {
  return (
    <section id="cards-section">
      <h3>Explore our brands</h3>
      <div className="gridWrapper">
        {cards.map((card) => {
          return (
            <div key={card.id} className="cardItem">
              <a href="#">
                <img src={card.img} alt="logos" />
              </a>
            </div>
          )
        })}
      </div>
      <button type="button" id="view">
        view all
      </button>
    </section>
  )
}

export default Cards
