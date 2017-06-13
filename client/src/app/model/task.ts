import { TaskCategory } from './task-category';

export class Task {
  id: number;
  description: string;
  doneAtDate: Date;
  doneDate: Date;
  taskCategory: TaskCategory;
}