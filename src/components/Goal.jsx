function Goal(props) {
  const { title, img, info, action } = props
  return (
    <div className="goal-card">
      <img src={img} alt={title} className="goal-img" />
      <div className="inner-goal-card">
        <h4 className="goal-title">{title}</h4>
        <p className="goal-info">{info}</p>
        <button type="button" className="button">
          {action} <span>→</span>
        </button>
      </div>
    </div>
  )
}

export default Goal
