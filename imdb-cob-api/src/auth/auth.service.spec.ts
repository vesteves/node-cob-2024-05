import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
// import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: UsersService;

  beforeEach(async () => {
    const mockUsersService = {
      findOne: jest.fn().mockImplementation((username: string) => {
        if (username === 'vinicius') {
          return {
            userId: 1,
            username: 'vinicius',
            password: 'senha',
          };
        }
        return null;
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      exports: [AuthService],
      controllers: [AuthController],
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an access_token', async () => {
    const usersServiceFindOneStub = jest.spyOn(usersService, 'findOne');
    const result = await service.signIn('vinicius', 'senha');
    Object.keys(result).forEach((key: any) => {
      expect(key).toEqual('access_token');
    });
    expect(usersServiceFindOneStub).toHaveBeenCalled();
  });
});
