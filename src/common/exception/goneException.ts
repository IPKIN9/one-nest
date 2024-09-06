import { HttpException, HttpStatus } from "@nestjs/common";

export class GoneException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Sumber daya yang Anda cari sudah tidak tersedia', 
            HttpStatus.GONE
        );
    }
}
