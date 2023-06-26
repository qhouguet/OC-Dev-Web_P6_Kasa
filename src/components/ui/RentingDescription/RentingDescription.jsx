import Tag from 'components/ui/Tag/Tag'
import Host from 'components/ui/Host/Host'
import Rating from 'components/ui/Rating/Rating'
import Collapse from 'components/ui/Collapse/Collapse'

function RentingDescription({
  title,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) {
  return (
    <>
      <div className="renting-description">
        <div>
          <h2 className="renting-description__title">{title}</h2>
          <span className="renting-description__location">{location}</span>
          <div className="renting-description__tags">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="renting-description__host">
          <Host name={host.name} picture={host.picture} />
          <Rating rating={rating} />
        </div>
      </div>

      <div className="renting-collapse">
        <div className="renting-collapse__wrapper">
          <Collapse title="Description" description={description} />
        </div>
        <div className="renting-collapse__wrapper">
          <Collapse title="Équipements" description={equipments} />
        </div>
      </div>
    </>
  )
}

export default RentingDescription
