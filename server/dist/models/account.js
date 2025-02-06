import { Schema, model } from 'mongoose';
import Task from './tasks.js';
;
const accountSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [Task.schema],
    //Mongoose method
    lastAccessed: { type: Date, default: Date.now }
});
const Account = model('Account', accountSchema);
export default Account;
