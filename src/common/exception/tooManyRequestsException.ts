import { HttpException, HttpStatus } from "@nestjs/common";

export class TooManyRequestsException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Terlalu banyak permintaan, coba lagi nanti', 
            HttpStatus.TOO_MANY_REQUESTS
        );
    }
}
