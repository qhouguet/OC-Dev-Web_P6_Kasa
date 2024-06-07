function Banner({ subtitle, image, alt }) {
  if (!subtitle && !image && !alt) return null
  return (
    <div className="banner">
      <img className="banner__image" src={image || ''} alt={alt || ''} />
      <div className="banner__overlay"></div>
      {subtitle ? <h1 className="banner__title">{subtitle}</h1> : null}
    </div>
  )
}

export default Banner
