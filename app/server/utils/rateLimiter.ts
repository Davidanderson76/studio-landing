// Lightweight in-memory rate limiter
const submissions: Record<string, number[]> = {};

/**
 * Returns true if the IP can submit, false if rate-limited
 * @param ip Client IP
 * @param limit Number of submissions allowed in windowMs
 * @param windowMs Time window in ms
 */
export function canSubmit(ip: string, limit = 3, windowMs = 60_000) {
  const now = Date.now();
  if (!submissions[ip]) submissions[ip] = [];

  // Remove timestamps older than window
  submissions[ip] = submissions[ip].filter((t) => now - t < windowMs);

  if (submissions[ip].length >= limit) return false;

  submissions[ip].push(now);
  return true;
}
