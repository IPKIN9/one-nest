export interface ServiceResponseDto <DATA> {
    error: Error | null,
    data : DATA | null
}