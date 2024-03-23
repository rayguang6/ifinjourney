import { Nav } from "./components";
import { Routes, Route } from 'react-router-dom'
import {
  Community,
  Company,
  Talent,
  Learning,
  Profile,
  Dashboard,
} from "./pages";

const App = () => {
  return (
    <>
      <Nav />
      <main className="container pt-32 px-16 max-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/company" element={<Company />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
