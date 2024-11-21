import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App"
import './i18n'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
