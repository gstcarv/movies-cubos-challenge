export type ApiResponse<T> = {
    results: T;
    total_pages: number;
    page: number;
};
