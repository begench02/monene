import { App } from './app'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

const domNode = document.getElementById('root')!
createRoot(domNode).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
