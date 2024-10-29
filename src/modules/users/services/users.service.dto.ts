
import { ServiceResponseDto } from "src/dto/serviceDto";
import { IUserGet, userDto } from "../dto/users.dto";

export interface userServiceDto {
    findUser(request: IUserGet): ServiceResponseDto <userDto[]>
}