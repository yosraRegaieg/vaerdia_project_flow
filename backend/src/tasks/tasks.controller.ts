import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('projects/:projectId/tasks')
@UseGuards(JwtAuthGuard) // toutes les routes exigent un token valide
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // GET /projects/:projectId/tasks
  @Get()
  findAll(@Param('projectId') projectId: string) {
    return this.tasksService.findByProject(+projectId);
  }

  // GET /projects/:projectId/tasks/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  // POST /projects/:projectId/tasks
  @Post()
  create(@Param('projectId') projectId: string, @Body() body: any) {
    return this.tasksService.create({
      ...body,
      project: { id: +projectId },
    });
  }

  // PUT /projects/:projectId/tasks/:id  (ex: changer statut drag & drop)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.tasksService.update(+id, body);
  }

  // DELETE /projects/:projectId/tasks/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}