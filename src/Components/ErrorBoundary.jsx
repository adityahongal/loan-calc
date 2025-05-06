// src/utils/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // Optionally log error to an error reporting service
    // console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className='bg-white w-screen h-dvh flex flex-col items-center justify-center'>
          <span className='font-urbanist text-2xl animate-bounce text-center md:text-4xl'>
            Oops! Something went wrong. <br /> Please refresh the page or try again later.
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
