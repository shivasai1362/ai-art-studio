// Centralized API configuration

// Backend URL configuration - direct URL including port
export const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:5000";

// FOOOCUS API host
export const apiHost = import.meta.env.VITE_API_HOST || "";

// Helper function to construct backend endpoints
export const getBackendEndpoint = (path) => `${backendUrl}${path.startsWith('/') ? path : '/' + path}`;
