import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ) {}

  // Toutes les tâches d'un projet
  findByProject(projectId: number) {
    return this.taskRepo.find({
      where: { project: { id: projectId } },
      relations: ['assignee', 'project'],
      order: { createdAt: 'ASC' },
    });
  }

  // Une tâche par id
  findOne(id: number) {
    return this.taskRepo.findOne({
      where: { id },
      relations: ['assignee', 'project'],
    });
  }

  // Créer une tâche
  create(data: Partial<Task>) {
    const task = this.taskRepo.create(data);
    return this.taskRepo.save(task);
  }

  // Modifier une tâche (ex: changer le statut dans le kanban)
  async update(id: number, data: Partial<Task>) {
    await this.taskRepo.update(id, data);
    return this.findOne(id);
  }

  // Supprimer une tâche
  async remove(id: number) {
    await this.taskRepo.delete(id);
    return { message: 'Tâche supprimée' };
  }
}