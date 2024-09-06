import { ServiceResponseDto } from 'src/common/dto/serviceDto';
import { Injectable } from '@nestjs/common';
import { userServiceDto } from './users.service.dto';
import { IUserGet, userDto } from '../users.dto';

@Injectable()
export class UsersService implements userServiceDto {
    findUser(request: IUserGet): ServiceResponseDto<userDto[]> {
        return {
            error: null,
            data: [
                {
                    name: request.search || "irwandi",
                    age : 10
                }
            ]
        }
    }
}
