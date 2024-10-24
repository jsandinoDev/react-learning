import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { JournalApp } from './JournalApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <JournalApp />
        </BrowserRouter>
    </StrictMode>,
)
