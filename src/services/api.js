// Lightweight API client for the DAR backend

const DEFAULT_BASE_URL = 'https://darkw.ai';

export const getBaseUrl = () => {
  // Allow overriding via environment variable at build time
  const envUrl = import.meta?.env?.VITE_API_BASE_URL;
  return (envUrl && String(envUrl).trim()) || DEFAULT_BASE_URL;
};

function getAuthToken() {
  try {
    return localStorage.getItem('auth_token') || '';
  } catch {
    return '';
  }
}

async function request(path, { method = 'GET', headers = {}, body } = {}) {
  const baseUrl = getBaseUrl();
  const token = getAuthToken();
  const finalHeaders = {
    'Content-Type': body instanceof FormData ? undefined : 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };

  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: Object.fromEntries(
      Object.entries(finalHeaders).filter(([, v]) => v !== undefined)
    ),
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
    credentials: 'include',
  });

  if (!res.ok) {
    let message = `HTTP ${res.status}`;
    try {
      const data = await res.json();
      message = data?.message || message;
    } catch {}
    const error = new Error(message);
    error.status = res.status;
    throw error;
  }

  // Try JSON; fall back to text
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return res.json();
  return res.text();
}

export const api = {
  get: (path, options) => request(path, { method: 'GET', ...(options || {}) }),
  post: (path, body, options) => request(path, { method: 'POST', body, ...(options || {}) }),
  put: (path, body, options) => request(path, { method: 'PUT', body, ...(options || {}) }),
  patch: (path, body, options) => request(path, { method: 'PATCH', body, ...(options || {}) }),
  delete: (path, options) => request(path, { method: 'DELETE', ...(options || {}) }),
};

// Common endpoints inferred from backend modules
export const endpoints = {
  projects: '/model', // design models / models; adjust if needed
  customers: '/api/customer',
  orders: '/order',
  designs: '/design',
  measurements: '/measurment',
  quotations: '/invoice',
  filesUpload: '/file-uploader',
  auth: '/auth',
};


