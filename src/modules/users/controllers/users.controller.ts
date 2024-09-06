import { InternalServerErrorException } from 'src/common/exception/internalServerErrorException';
import { ApiResponseDto } from 'src/common/dto/controllerDto';
import { UsersService } from '../services/users.service';
import { Controller, Get, Query } from '@nestjs/common';
import { userControllerDto } from './users.controller.dto';
import { IUserGet, userDto } from '../users.dto';

@Controller('users')
export class UsersController implements userControllerDto {
    constructor(private userService: UsersService){}

    @Get()
    get(@Query() query: IUserGet): ApiResponseDto<userDto[]> {
        const userSvc = this.userService.findUser(query)
        console.log(query.search);

        if (userSvc.error != null) {
            throw new InternalServerErrorException();
        }

        return {
            status: 200,
            message: "success",
            data: userSvc.data
        }
    }
}
