import { Schema, model, Document } from "mongoose";

interface TaskInterface extends Document {
  name: string;
  isCompleted: boolean;
  startDate: Date;
  endDate: Date;
}

const taskSchema = new Schema<TaskInterface>({
  name: { type: String, required: true },
  isCompleted: { type: Boolean, required: true, default: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false }
});

const Task = model<TaskInterface>("Task", taskSchema);

export default Task;
