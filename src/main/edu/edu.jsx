import "./edu.css"

function Education(props) {
  
  const trainings = props.text.trainings
  console.log(trainings)
  return (
    <>
      <div className="education" id="Education">
        <h2 className="h2-edu">Education & Training</h2>
        <div className="edu-table-wrapper">
          <div className="headers">
            <div className="h-course">Course</div>
            <div className="company">Company</div>
            <div className="period">Period</div>
          </div>
          {trainings.map((val, idx) => {
            return (
              <div className="edu-row" key={idx}>
                <div className="edu-col">{val.training}</div>
                <div className="edu-col">{val.company}</div>
                <div className="edu-col">{val.period}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}


export default Education