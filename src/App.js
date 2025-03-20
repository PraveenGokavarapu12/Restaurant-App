import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import OrdersPage from './components/OrdersPage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/orders' element={<OrdersPage/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
