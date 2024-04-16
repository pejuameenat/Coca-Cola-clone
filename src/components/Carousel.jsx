import { useState } from 'react'
import Goal from './Goal'
import Controls from './Controls'
const Carousel = ({ featured }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleControlsClick(id) {
    setCurrentIndex(id)
  }

  return (
    <section id="featured">
      <h2>Featured News</h2>
      <div className="carouselWrapper">
        <div className="carousel">
          {featured.map((feature, i) => {
            return (
              <div
                key={feature.id}
                id="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              >
                <Goal {...feature} currentIndex={i} />
              </div>
            )
          })}
        </div>
        <Controls
          currentIndex={currentIndex}
          currentArray={featured}
          handleControlsClick={handleControlsClick}
        />
      </div>
    </section>
  )
}

export default Carousel
