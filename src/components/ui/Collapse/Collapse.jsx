import React, { useState } from 'react'
import open_btn from 'images/open_btn.svg'

function Collapse({ title, description }) {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen(!open)
  }

  // On vient stocker un booléen pour savoir si
  // on va devoir itérer sur un array ou
  // si on va travailler sur juste une string
  const isArray = Array.isArray(description)

  // On vient changer la valeur de notre attribut aria-hidden
  // selon notre state
  let isAriaHiddenTrue = ''
  open ? (isAriaHiddenTrue = 'false') : (isAriaHiddenTrue = 'true')

  return (
    <div className="collapse">
      <div className="collapse__bar">
        <h2 className="collapse__bar__title">{title}</h2>
        <img
          className={`collapse__bar__button ${
            open ? 'collapse__bar__button--active' : ''
          }`}
          src={open_btn}
          alt="Ouvrir ou fermer le composant"
          onClick={() => {
            toggle()
          }}
        />
      </div>
      {isArray ? (
        <div
          className={`collapse__description ${
            open ? 'collapse__description--active' : ''
          }`}
        >
          <div>
            <div
              className="collapse__description__style"
              aria-hidden={isAriaHiddenTrue}
            >
              {description.map((equipment) => (
                <span key={equipment} aria-hidden={isAriaHiddenTrue}>
                  {equipment}
                  <br />
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`collapse__description ${
            open ? 'collapse__description--active' : ''
          }`}
        >
          <div>
            <div
              className="collapse__description__style"
              aria-hidden={isAriaHiddenTrue}
            >
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Collapse
