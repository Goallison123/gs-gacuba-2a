import { Component, ErrorInfo, ReactNode } from "react";
import { RefreshCw, AlertTriangle, Home } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-center">
          <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#ff8c00] flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#1e244b]">Something went wrong</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              An unexpected error occurred while loading this view. You can reload the page or return to the home screen.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 py-2.5 px-4 bg-[#ff8c00] hover:bg-[#e07b00] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Page</span>
              </button>
              <button
                onClick={this.handleReset}
                className="flex-1 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Return Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
