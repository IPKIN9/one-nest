import { HttpException, HttpStatus } from "@nestjs/common";

export class InternalServerErrorException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Server sedang dalam perbaikan, coba lagi nanti', 
            HttpStatus.INTERNAL_SERVER_ERROR
        )
    }
}