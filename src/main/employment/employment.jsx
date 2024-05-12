import './employment.css'

function employeePlaceClickHandler(e) {
  const target = e.currentTarget.nextElementSibling
  target.classList.toggle("opened")
}
function Employment(props) {

  const employmentPlaces = props.text.employment
  return (
    <>
      <div className="employment" id='Employment'>
        {
          employmentPlaces.map((val, id) => {
            
            return (
              <div className="emp-wrapper">
              <div className="employment-place" key={val + id} onClick={employeePlaceClickHandler}>
                <h3 className="place">{val.place}</h3>
                <h5 className="position">{val.position}</h5>
                <h5 className="period">{val.period}</h5>
                </div>
              <div className="employment-full-descr">
                  <p className="role-description">
                    {val.description}
                  </p>
                  <ul className="responsabilities">
                    {
                      val.responsabilites.map((val, idx) => {
                        return (<li key={val+idx} className="responsabilities-item">
                          {val}
                        </li>)
                      })
                    }
                  </ul>
              </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Employment