
import { ServiceResponseDto } from "src/common/dto/serviceDto";
import { IUserGet, userDto } from "../users.dto";

export interface userServiceDto {
    findUser(request: IUserGet): ServiceResponseDto <userDto[]>
}