import { BaseError } from "@/utils/errors/BaseError";
import { ErrorTypes } from "@/types/errorTypes";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

class ValidationError extends BaseError {
    constructor(details: Record<string, string> | Record<string, string>[]) {
        super(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST, ErrorTypes.VALIDATION, details);
    }
}

export { ValidationError }
