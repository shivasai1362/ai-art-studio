// Centralized API configuration

// Backend server configuration
export const backendServer = import.meta.env.VITE_BACKEND_SERVER || "http://127.0.0.1";
export const backendPort = import.meta.env.VITE_BACKEND_PORT || "5000";
export const backendUrl = `${backendServer}:${backendPort}`;

// FOOOCUS API host
export const apiHost = import.meta.env.VITE_API_HOST || "";

// Helper function to construct backend endpoints
export const getBackendEndpoint = (path) => `${backendUrl}${path.startsWith('/') ? path : '/' + path}`;
