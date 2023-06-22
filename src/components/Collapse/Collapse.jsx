import React, { useState } from 'react'
import open_btn from '../../images/open_btn.svg'

function Collapse(props) {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen(!open)
  }

  const isArray = Array.isArray(props.description)

  const [rotateChevron, setRotateChevron] = useState(false)

  const handleRotate = () => setRotateChevron(!rotateChevron)

  const rotate = rotateChevron ? 'rotate(-180deg)' : 'rotate(0)'

  return (
    <>
      <div className="wrapper-collapse">
        <div className="collapse-bar">
          <h2>{props.title}</h2>
          <img
            style={{ transform: rotate, transition: 'all 0.15s linear' }}
            className="desktop-btn"
            src={open_btn}
            alt="Ouvrir ou fermer le composant"
            onClick={() => {
              handleRotate()
              toggle()
            }}
          />
        </div>
        {
          // open &&
          isArray ? (
            <div className={`collapse-description ${open ? 'active' : ''}`}>
              <div>
                <div className="styletest">
                  {props.description.map((equipment) => (
                    <span key={equipment}>
                      {equipment}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className={`collapse-description ${open ? 'active' : ''}`}>
              <div>
                <div className="styletest">{props.description}</div>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
export default Collapse
