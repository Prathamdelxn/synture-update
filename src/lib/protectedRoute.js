import { getTokenFromCookies } from './cookie';
import { verifyToken } from './auth';

export const protectRoute = (req, allowedRoles = []) => {
  const cookieHeader = req.headers.get('cookie');
  const token = getTokenFromCookies(cookieHeader);

  if (!token) {
    throw { message: 'Unauthorized: No token found', statusCode: 401 };
  }

  let user;
  try {
    user = verifyToken(token);
    console.log("Decoded user:", user); 
  } catch (err) {
    throw { message: 'Unauthorized: Invalid token', statusCode: 401 };
  }

  if (!allowedRoles.includes(user.role)) {
    throw { message: 'Forbidden: Access denied', statusCode: 403 };
  }

  return user;
};
