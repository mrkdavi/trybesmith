import UserModel from '../models/UserModel';
import connection from '../models/connection';
import { UserDataRequest, UserModelReturn } from '../@types/IUser';
import { generateToken } from '../utils/token';

export default class UserService {
  constructor(private userModel = new UserModel(connection)) {}

  signup = async (userData: UserDataRequest): Promise<string> => {
    const user: UserModelReturn = await this.userModel.signup(userData);
    const { token } = generateToken({ id: user.id });
    return token;
  };
}