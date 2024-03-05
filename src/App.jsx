import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { WastePage } from "./pages/WastePage"
import AddImage from "./pages/AddImage"
import Nav from "./components/Nav"

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to={'/waste'} />} />
        <Route path="/waste" element={<WastePage />} />
        <Route path="/waste-add" element={<AddImage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App