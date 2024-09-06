import { HttpException, HttpStatus } from "@nestjs/common";

export class UnprocessableEntityException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Data yang Anda masukkan tidak dapat diproses', 
            HttpStatus.UNPROCESSABLE_ENTITY
        );
    }
}
