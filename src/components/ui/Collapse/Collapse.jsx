import React, { useState, useRef, useEffect } from 'react'
import open_btn from 'images/open_btn.svg'

function Collapse({ title, description }) {
  const [open, setOpen] = useState(false)

  // REF HEIGHT
  // On vient utiliser le hook useRef pour faire persister nos données même si rerender il y a
  // et on utilise la propriété scrollHeight qui nous donne la taille de l'élement même si il n'est pas visible
  const [heightEl, setHeightEl] = useState()
  const refHeight = useRef()
  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  // On change la valeur de notre state open à l'appel de la fonction toggle()
  const toggle = () => setOpen(!open)

  // On vient stocker un booléen pour savoir si on va devoir itérer sur un array ou si on va travailler sur juste une string
  const isArray = Array.isArray(description)

  // On vient changer la valeur de notre attribut aria-hidden selon la valeur de notre state open
  let isAriaHiddenTrue = ''
  open ? (isAriaHiddenTrue = 'false') : (isAriaHiddenTrue = 'true')

  if (!title || !description) return null

  return (
    <div className="collapse">
      <div className="collapse__bar" onClick={toggle}>
        <h2 className="collapse__bar__title">{title}</h2>
        <img
          className={`collapse__bar__button ${open ? 'collapse__bar__button--active' : ''}`}
          src={open_btn}
          alt="Ouvrir ou fermer le composant"
        />
      </div>
      <div
        className={`collapse__description ${open ? 'collapse__description--active' : ''}`}
        style={{ height: open ? `${heightEl}` : '0px' }}
        ref={refHeight}
      >
        <div className="collapse__description__style" aria-hidden={isAriaHiddenTrue}>
          {isArray
            ? description.map((equipment) => (
                <span key={equipment} aria-hidden={isAriaHiddenTrue}>
                  {equipment}
                  <br />
                </span>
              ))
            : description}
        </div>
      </div>
    </div>
  )
}
export default Collapse
