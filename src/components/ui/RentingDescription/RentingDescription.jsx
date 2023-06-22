import Tag from 'components/ui/Tag/Tag'
import Host from 'components/ui/Host/Host'
import Rating from 'components/ui/Rating/Rating'
import Collapse from 'components/ui/Collapse/Collapse'

function RentingDescription(props) {
  return (
    <>
      <div className="renting-description">
        <div>
          <h2>{props.title}</h2>
          <span className="location">{props.location}</span>
          <div className="tags">
            {props.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="host-rating">
          <Host name={props.host.name} picture={props.host.picture} />
          <Rating rating={props.rating} />
        </div>
      </div>

      <div className="collapse-renting">
        <div className="renting-wrapper">
          <Collapse title="Description" description={props.description} />
        </div>
        <div className="renting-wrapper">
          <Collapse title="Équipements" description={props.equipments} />
        </div>
      </div>
    </>
  )
}

export default RentingDescription
