import { HttpException, HttpStatus } from "@nestjs/common";

export class ConflictException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Terjadi konflik, data yang Anda coba masukkan sudah ada', 
            HttpStatus.CONFLICT
        );
    }
}
