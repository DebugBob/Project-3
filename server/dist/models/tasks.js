import { Schema, model } from "mongoose";
const taskSchema = new Schema({
    name: { type: String, required: true },
    isCompleted: { type: Boolean, required: true, default: false },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false }
});
const Task = model("Task", taskSchema);
export default Task;
