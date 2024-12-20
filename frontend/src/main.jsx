import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//chakra provider for prestyled components
import {ChakraProvider} from '@chakra-ui/react'
//browser router to allow for routing
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
