import mongoose, { Schema, Document } from 'mongoose';

export enum UserType {
  FATHER = 'FATHER',
  MOTHER = 'MOTHER',
}

export interface IUser extends Document {
  id: string;
  userid: string;
  hash: string;
  password: string;
  username?: string;
  type: UserType;
  profileImage?: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  userid: { type: String, required: true, unique: true },
  salt: { type: String, required: true, maxlength: 10 },
  password: { type: String, required: true, maxlength: 128 },
  username: { type: String, maxlength: 30 },
  type: { type: String, enum: Object.values(UserType), required: true },
  profileImage: {
    type: String,
    default:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E',
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
