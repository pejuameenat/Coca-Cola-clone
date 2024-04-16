function Job(props) {
  const { h4, p, img, action } = props
  return (
    <article className="jobs-container">
      <div className="job-card">
        <h4 className="job-title">{h4}</h4>
        <p className="job-info">{p}</p>
        <p>{props?.p2}</p>
        <button type="button" className="jobs-button">
          {action}
        </button>
      </div>
      <div className="img-container">
        <img src={img} alt={h4} className="job-img" />
      </div>
    </article>
  )
}

export default Job
