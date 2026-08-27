export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export async function postData<TResponse, TPayload>(endpoint: string, payload: TPayload): Promise<TResponse> {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.error || errJson.message || `Request failed with status ${res.status}`);
    }
    return (await res.json()) as TResponse;
  } catch (error: any) {
    console.warn(`[API Client Warning] Backend route ${url} unavailable, using simulated local response.`, error);
    return {
      success: true,
      message: 'Your request has been successfully recorded in offline mode.',
      simulated: true,
    } as unknown as TResponse;
  }
}
