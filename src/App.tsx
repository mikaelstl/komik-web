import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Library } from "./pages/Library"
import { Reader } from "./pages/Reader"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/library" replace />} />

        <Route path="/library" element={<Library/>}/>
        <Route path="/reader/:comickey" element={<Reader/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
