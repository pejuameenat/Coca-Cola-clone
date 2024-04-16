
const Controls = (props) => {
  const { currentArray, handleControlsClick, currentIndex } = props
  return (
    <div className="controls">
      {currentArray.map((item,i) => {
        return (
          <button
            type="button"
            key={item.id}
            aria-label="Button to show next slide"
            className={currentIndex === i ? 'active-Button' : ''}
            onClick={() => handleControlsClick(i)}
          ></button>
        )
      })}
    </div>
  )
}

export default Controls
