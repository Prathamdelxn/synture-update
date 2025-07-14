import { parse } from 'cookie';

export function getTokenFromCookies(cookieHeader) {
  if (!cookieHeader) return null;
  const cookies = parse(cookieHeader);
  return cookies.auth_token || null;
}
