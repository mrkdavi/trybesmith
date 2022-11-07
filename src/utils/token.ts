import { sign, verify } from 'jsonwebtoken';
import { UserTokenData } from '../@types/IUser';

export const verifyToken = (token: string) => {
  const { JWT_SECRET } = process.env;
  return verify(token, JWT_SECRET as string);
};
export const generateToken = (user: UserTokenData) => {
  const { JWT_SECRET } = process.env;
  const token = sign(user, JWT_SECRET as string);
  return { token };
};