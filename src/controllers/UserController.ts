import { Response } from 'express';
import UserService from '../services/UserService';

import { TypedRequest } from '../@types/request/TypedRequest';
import { UserDataRequest } from '../@types/IUser';

export default class UserController {
  constructor(private userService = new UserService()) {}

  signup = async (req: TypedRequest<UserDataRequest>, res: Response) => {
    const { body } = req;
    const token = await this.userService.signup(body);
    res.status(201).json({ token });
  };
}