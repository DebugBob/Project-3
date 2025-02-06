import { Schema, model, Document } from 'mongoose';
import Task from './tasks.js';
import bcrypt from 'bcrypt';


interface AccountInterface extends Document{
    username: string;
    password: string;
    tasks: [];
    lastAccessed: Date
    isCorrectPassword( password: string): Promise<boolean>;
};

const accountSchema = new Schema<AccountInterface>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [Task.schema],
    //Mongoose method
    lastAccessed: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

accountSchema.pre<AccountInterface>("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

const Account = model<AccountInterface>('Account', accountSchema);

export default Account;