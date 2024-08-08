import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/dto/LoginDto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.login(signInDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getUser')
  async getUser(@Req() req: Request) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }

    const token = authHeader.replace('Bearer ', '');
    const decoded = this.authService.verifyToken(token);

    if (!decoded) {
      throw new UnauthorizedException('Invalid token');
    }

    const user = await this.authService.getUser(decoded.sub);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }
}
