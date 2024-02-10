import { usersApi } from '.';
import { CreateUser, UserProfile } from './client';

export const userProvider = {
  async create(user: CreateUser) {
    const { data } = await usersApi().createUser([user]);
    return data;
  },
  async getAll() {
    const { data } = await usersApi().getAllUsers();
    return data;
  },
  async getOne(userId: string) {
    const { data } = await usersApi().getUserById(userId);
    return data;
  },
  async updateProfile(userId: string, userProfile: UserProfile) {
    const { data } = await usersApi().updateUserProfile(userId, userProfile);
    return data;
  },
};
