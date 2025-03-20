import CreatePage from '../Pages/CreatePage'
import EditPage from '../Pages/EditPage'
import Home from '../Pages/Home'
import SinglePage from '../Pages/SinglePage'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
   
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/singlepage' element={<SinglePage />} />
<Route path='/editpage' element={<EditPage />} />
<Route path='/createpage' element={<CreatePage  />} />
</Routes>
</BrowserRouter>

  )
}

export default App
