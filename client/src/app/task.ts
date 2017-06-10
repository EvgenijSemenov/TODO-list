import { TaskCategory } from './task-category';

export class Task {
  id: number;
  description: string;
  doneAtDate: number;
  doneDate: number;
  category: TaskCategory;
}