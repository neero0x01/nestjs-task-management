import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  getAllTasks() {
    return this.tasks;
  }

  createTasks(name) {
    this.tasks.push(name);
    return `task ${name} created`;
  }
}
