import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private projectRepo: Repository<Project>,
  ) {}

  // Récupérer tous les projets
  findAll() {
    return this.projectRepo.find();
  }

  // Récupérer un projet par id
  findOne(id: number) {
    return this.projectRepo.findOne({ where: { id } });
  }

  // Créer un projet
  create(data: Partial<Project>) {
    const project = this.projectRepo.create(data);
    return this.projectRepo.save(project);
  }

  // Modifier un projet
  async update(id: number, data: Partial<Project>) {
    await this.projectRepo.update(id, data);
    return this.findOne(id);
  }

  // Supprimer un projet
  async remove(id: number) {
    await this.projectRepo.delete(id);
    return { message: 'Projet supprimé' };
  }
}
