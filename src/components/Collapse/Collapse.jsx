import React, { useState } from 'react'
import close_btn from '../../assets/close_btn.svg'
import open_btn from '../../assets/open_btn.svg'

function Collapse(props) {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen(!open)
  }

  return (
    <div className="wrapper-width">
      <div className="wrapper-collapse">
        <div className="collapse-bar" onClick={toggle}>
          <h2>{props.title}</h2>
          <img
            className="desktop-btn"
            src={open ? close_btn : open_btn}
            alt="Ouvrir ou fermer le composant"
          />
        </div>
        {open && (
          <div className="collapse-description">{props.description}</div>
        )}
      </div>
    </div>
  )
}
export default Collapse
