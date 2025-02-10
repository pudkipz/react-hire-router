import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Link, Route, Routes } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => {
        const dataWithId = data.results.map((p, id) => {
          p.id = id
          return p
        })
        // console.log(dataWithId)
        setPeople(dataWithId)})
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile people={people} />}
        />
      </Routes>
    </>
  )
}
