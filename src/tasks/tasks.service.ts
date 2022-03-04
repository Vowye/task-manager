import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['cucucuccucucucu', 'cucucucucuc', 'cucucucuc'];

  getAllTasks() {
    return this.tasks;
  }
}
