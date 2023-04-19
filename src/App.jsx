import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
