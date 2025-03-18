import CreatePage from '../Pages/CreatePage'
import EditPage from '../Pages/EditPage'
import SinglePage from '../Pages/SinglePage'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
   
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/single-page' element={<SinglePage />} />
<Route path='/edit-page' element={<EditPage />} />
<Route path='/create-page' element={<CreatePage  />} />
</Routes>
</BrowserRouter>

  )
}

export default App
