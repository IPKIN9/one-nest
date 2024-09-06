import { HttpException, HttpStatus } from "@nestjs/common";

export class BadRequestException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Permintaan tidak valid, periksa kembali data yang Anda masukkan', 
            HttpStatus.BAD_REQUEST
        );
    }
}
