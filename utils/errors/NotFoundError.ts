import { BaseError } from "@/utils/errors/BaseError";
import { ErrorTypes } from "@/types/errorTypes";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

class NotFoundError extends BaseError {
    constructor(details: Record<string, string>) {
        super(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND, ErrorTypes.NOT_FOUND, details);
    }
}

export { NotFoundError };