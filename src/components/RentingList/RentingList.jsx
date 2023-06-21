import Card from '../Card/Card'
import logements from '../../data/logements.json'

function Cards() {
  return (
    <>
      <section className="cards">
        {logements.map((data) => (
          <Card
            title={data.title}
            image={data.cover}
            alt={data.title}
            id={data.id}
            key={data.id}
          />
        ))}
      </section>
    </>
  )
}

export default Cards
