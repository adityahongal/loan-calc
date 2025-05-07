import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className='bg-brand dark:bg-brand-dark text-text-main dark:text-purple-dark w-screen h-dvh flex flex-col items-center justify-center transition-colors duration-300'>
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
