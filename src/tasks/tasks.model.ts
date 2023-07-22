export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  // CANCELLED = 'CANCELLED',
  // DELETED = 'DELETED',
  // PENDING = 'PENDING',
  // REJECTED = 'REJECTED',
  // ACCEPTED = 'ACCEPTED',
}
