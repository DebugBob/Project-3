import { Account, Task } from '../models/index.js';
export const getUserAccounts = async (_req, _res) => {
    try {
        const users = await Account.find();
        _res.json(users);
    }
    catch (error) {
        _res.status(500).json(error);
    }
};
export const createUserAccount = async (_req, _res) => {
    try {
        const users = await Account.create({ username: _req.params.username }, { password: _req.params.password });
        _res.json(users);
    }
    catch (error) {
        _res.status(500).json(error);
    }
};
//Returns tasks array tied to user account.
export const getTasks = async (_req, _res) => {
    try {
        const tasks = await Task.find({ _id: _req.params.tasks })
            .select('-__v');
        _res.json(tasks);
    }
    catch (error) {
        _res.status(500).json(error);
    }
};
//Add foreach to tasks viewer/form
export const addTask = async (_req, _res) => {
    try {
        const newTask = await Account.create({ tasks: _req.body });
        if (!newTask) {
            _res
                .status(404)
                .json({ message: "Task create error" });
        }
        else {
            _res.json("Created Task");
        }
    }
    catch (error) {
        _res.status(500).json(error);
    }
    ;
};
export const deleteTask = async (_req, _res) => {
    try {
        const task = await Account.findOneAndDelete({ _id: _req.params.tasks });
        if (!task) {
            _res.status(404).json({ message: "Task delete error" });
        }
    }
    catch (error) {
        _res.status(500).json(error);
    }
};
