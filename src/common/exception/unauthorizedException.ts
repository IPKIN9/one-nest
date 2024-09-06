import { HttpException, HttpStatus } from "@nestjs/common";

export class UnauthorizedException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Akses tidak diizinkan, Anda harus masuk terlebih dahulu', 
            HttpStatus.UNAUTHORIZED
        );
    }
}