export interface IApiresponse<T> {
     data: T[];
     message: string;
     errors?: string[];
}