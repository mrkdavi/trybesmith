import { Pool, ResultSetHeader } from 'mysql2/promise';
import { UserDataRequest, UserModelReturn } from '../@types/IUser';

export default class UserModel {
  constructor(private connection: Pool) { }

  signup = async (userData: UserDataRequest): Promise<UserModelReturn> => {
    const { classe, level, password, username } = userData;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (classe, level, password, username) VALUES (?, ?, ?, ?)',
      [classe, level, password, username],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { ...userData, id: insertId };
  };
}