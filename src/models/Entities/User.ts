import { IUser } from '../../@types/IUser';

export default class Product {
  id!: number | undefined;

  username: string;

  classe: string;

  level: number;

  password: string;

  constructor({ id, username, classe, level, password }: IUser) {
    this.id = id;
    this.username = username;
    this.classe = classe;
    this.level = level;
    this.password = password;
  }
}