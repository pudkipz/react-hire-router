import { Link } from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props
  // console.log(person)

  return (
    <li>
      <Link to={`/view/${person.id}`}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
