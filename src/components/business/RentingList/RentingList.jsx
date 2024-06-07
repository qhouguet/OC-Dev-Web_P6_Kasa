import Card from 'components/ui/Card/Card'

function Cards({ rentings }) {
  return (
    <section className="card-list">
      {rentings.map((data) => (
        <Card title={data.title} image={data.cover} alt={data.title} path={'/renting/' + data.id} key={data.id} />
      ))}
    </section>
  )
}

export default Cards
