"use client";

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // In production, you might want to send this to an error reporting service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      });
    }
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent 
          error={this.state.error} 
          reset={() => this.setState({ hasError: false, error: undefined })}
        />
      );
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({ error, reset }: { error?: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-4">
          Something went wrong
        </h1>
        <p className="text-primary/60 mb-6">
          We apologize for the inconvenience. The page encountered an unexpected error.
        </p>
        {error && process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-sm text-red-600 mb-2">
              Error details (development only)
            </summary>
            <pre className="text-xs bg-red-50 p-2 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        <button
          onClick={reset}
          className="px-4 py-2 bg-merlot text-off-white rounded-md hover:bg-merlot/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}