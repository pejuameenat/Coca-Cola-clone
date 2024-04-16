import Controls from './Controls'
const Slider = ({ slider, handleControlsClick, currentIndex }) => {
  return (
    <section>
      <div className="overall-slider-wrapper">
        <div className="slider-container">
          {slider.map((slide) => {
            const { id, img, alt } = slide
            return (
              <div
                key={id}
                className="slides"
                style={{
                  transform: `translateX(${-currentIndex * 100}%)`,
                }}
              >
                <img src={img} alt={alt} className="slider-img" />
              </div>
            )
          })}
        </div>
        <Controls
          currentArray={slider}
          handleControlsClick={handleControlsClick}
          currentIndex={currentIndex}
        />
      </div>
    </section>
  )
}

export default Slider
