import Job from './Job'
import { jobs } from '../data'
function Jobs() {
  return (
    <section id="job-section">
      <div className="job-grid">
        {jobs.map((item) => {
          return <Job key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Jobs
