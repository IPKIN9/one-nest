import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Sumber daya yang Anda cari tidak ditemukan', 
            HttpStatus.NOT_FOUND
        );
    }
}
