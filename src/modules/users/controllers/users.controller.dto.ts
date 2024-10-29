import { ApiResponseDto } from "src/dto/controllerDto";
import { Req } from "@nestjs/common";
import { IUserGet, userDto } from "../dto/users.dto";

export interface userControllerDto {
    get(query: IUserGet): ApiResponseDto<userDto[]>
}