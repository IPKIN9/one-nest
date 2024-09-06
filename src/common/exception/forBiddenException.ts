import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Anda tidak memiliki izin untuk mengakses sumber daya ini', 
            HttpStatus.FORBIDDEN
        );
    }
}
