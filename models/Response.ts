export interface SingleResponse<T> {
    status: number;
    message: string;
    data: T;
}

export interface ListResponse<T> {
    status: number;
    message: string;
    data: T[];
}
