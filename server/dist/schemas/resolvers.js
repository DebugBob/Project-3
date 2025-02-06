import { Account, Task } from "../models/index.js";
const resolvers = {
    Query: {
        async Accounts() {
            return await Account.find({}).populate("tasks");
        },
        async Tasks() {
            return await Task.find();
        },
    },
};
export default resolvers;
