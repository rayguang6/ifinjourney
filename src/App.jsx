import { Nav } from "./components";
import { Routes, Route } from 'react-router-dom'
import {
  Page1,
  Page2,
  Page3
} from "./pages";

const App = () => {
  return (
    <>
      <Nav />
      <main className="container pt-32 px-16 max-container">
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
