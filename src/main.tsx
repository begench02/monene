import { App } from './app'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { StrictMode } from 'react'

const domNode = document.getElementById('root')!
createRoot(domNode).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)
