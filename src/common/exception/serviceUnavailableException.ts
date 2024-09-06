import { HttpException, HttpStatus } from "@nestjs/common";

export class ServiceUnavailableException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Layanan tidak tersedia, coba lagi nanti', 
            HttpStatus.SERVICE_UNAVAILABLE
        );
    }
}
