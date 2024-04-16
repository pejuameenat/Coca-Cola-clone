import Goal from './Goal'
import { goal } from '../data'
function Goals() {
  return (
    <section id="goal-section">
      <div className="container">
        <h2>Our sustainability goals and progress</h2>
        <div className="grid">
          {goal.map((item) => {
            return <Goal key={item.id} {...item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Goals
