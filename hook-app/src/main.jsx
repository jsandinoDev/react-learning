import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState.js/CounterApp'
import { CounterWithCustomHooks } from './01-useState.js/CounterWithCustomHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallBackHook } from './06-memos/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'

createRoot(document.getElementById('root')).render(
  <>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHooks /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallBackHook /> */}
    <Padre />
    
    
  </>,
)
