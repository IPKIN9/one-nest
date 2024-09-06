export interface ApiResponseDto <DATA> {
    status : number,
    message: string | Error,
    data   : DATA
}