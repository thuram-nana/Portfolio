import React from 'react';

// Error Boundary — catches render errors in child components and shows a
// minimal fallback instead of crashing the whole page.
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.error('Error caught by Error Boundary:', error, info);
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI
            return (
                <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: '#0A0C10', color: '#e0e0e0', fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'center' }}>
                    <div>
                        <p style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Something went wrong loading this page.</p>
                        <a href="/" style={{ color: '#00E5FF' }}>Reload</a>
                    </div>
                </div>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;