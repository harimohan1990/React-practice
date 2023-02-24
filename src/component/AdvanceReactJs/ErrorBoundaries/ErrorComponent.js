import React from 'react'
import ErrorBoundary from './ErrorBoundaries'

function ErrorComponent() {
  return (
    <ErrorBoundary>
    <div>dlsdfhdsjhf</div>
    </ErrorBoundary>
  )
}

// Error boundaries do not catch errors for:

// Event handlers (learn more)
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)

export default ErrorComponent