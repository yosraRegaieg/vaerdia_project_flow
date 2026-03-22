import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// Exemple d'utilisation sur une route :
// @Roles('admin', 'chef_projet')
// @UseGuards(JwtAuthGuard, RolesGuard)
// @Get('admin-only')