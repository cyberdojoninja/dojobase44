import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68de8a576d9b2b5362a1f118", 
  requiresAuth: true // Ensure authentication is required for all operations
});
