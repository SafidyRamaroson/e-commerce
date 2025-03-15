import { ErrorTypes } from "@/types/errorTypes";


class BaseError extends Error  {
    public success: boolean;
    public error: {
        code: number;
        type: ErrorTypes;
        details: Record<string, string> | Record<string, string>[] ;
    };

    constructor(message: string, code: number, type: ErrorTypes, details: Record<string, string> | Record<string , string>[]) {
        super(message);
        this.success = false;
        this.error = {
            code,
            type,
            details
        };
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export { BaseError };