import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { WastePage } from "./pages/WastePage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/waste'} />} />
        <Route path="/waste" element={<WastePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App