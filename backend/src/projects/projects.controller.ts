import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('projects')
@UseGuards(JwtAuthGuard) // toutes les routes exigent un token valide
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  // GET /projects — tout le monde (connecté) peut voir les projets
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  // GET /projects/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  // POST /projects — seulement admin et chef_projet
  @Post()
  @Roles('admin', 'chef_projet')
  @UseGuards(RolesGuard)
  create(@Body() body: any, @Request() req: any) {
    return this.projectsService.create({ ...body, chef: req.user });
  }

  // PUT /projects/:id — seulement admin et chef_projet
  @Put(':id')
  @Roles('admin', 'chef_projet')
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() body: any) {
    return this.projectsService.update(+id, body);
  }

  // DELETE /projects/:id — seulement admin
  @Delete(':id')
  @Roles('admin')
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}