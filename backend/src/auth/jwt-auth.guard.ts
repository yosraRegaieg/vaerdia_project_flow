import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Utilise ce guard sur n'importe quelle route pour exiger un token JWT valide
// Exemple : @UseGuards(JwtAuthGuard)
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}