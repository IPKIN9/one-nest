import { ApiResponseDto } from "src/common/dto/controllerDto";
import { Req } from "@nestjs/common";
import { IUserGet, userDto } from "../users.dto";

export interface userControllerDto {
    get(query: IUserGet): ApiResponseDto<userDto[]>
}