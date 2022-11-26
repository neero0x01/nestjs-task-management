export enum TasksStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'INPROGRESS',
  DONE = 'DONE',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TasksStatus;
}
