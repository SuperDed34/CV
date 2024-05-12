import './skills.css'


function Skills(props) {

  const skillsForLeftColumn = props.text.skillsColumnLeft
  const skillsForRightColumn = props.text.skillsColumnRight

  return (
    <>
      <div className="skills" id='Skills'>
        <h2 className="h2-skills">{props.text.skills}</h2>
        <div className="skills-wrapper">
          <ul className="skills-left">
            {skillsForLeftColumn.map((val, id) => {
             return <li className='skills-item' key={id}>&#10003; {val}</li>
            })}
          </ul>
          <ul className="skills-right">
            {skillsForRightColumn.map((val, id) => {
             return <li className='skills-item' key={id}>&#10003; {val}</li>
            })}
          </ul>
        </div>
    </div>
    </>
  )
}

export default Skills