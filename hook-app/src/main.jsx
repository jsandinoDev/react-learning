import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState.js/CounterApp'
import { CounterWithCustomHooks } from './01-useState.js/CounterWithCustomHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHooks /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    <MultipleCustomHooks />

    
  </StrictMode>,
)
