import { BaseError } from "@/utils/errors/BaseError";
import { ErrorTypes } from "@/types/errorTypes";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

class ServiceUnavailableError extends BaseError {
    constructor(details: Record<string, string>) {
        super(ReasonPhrases.SERVICE_UNAVAILABLE, StatusCodes.SERVICE_UNAVAILABLE, ErrorTypes.SERVICE_UNAVAILABLE, details);
    }
}

export { ServiceUnavailableError }