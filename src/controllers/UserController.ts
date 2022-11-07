import { Response } from 'express';
import UserService from '../services/UserService';

import { TypedRequest } from '../@types/request/TypedRequest';
import { UserDataRequest } from '../@types/IUser';

export default class UserController {
  constructor(private userService = new UserService()) {}

  signup = async (req: TypedRequest<UserDataRequest>, res: Response): Promise<void> => {
    const { body } = req;
    const token: string = await this.userService.signup(body);
    res.status(201).json({ token });
  };
}