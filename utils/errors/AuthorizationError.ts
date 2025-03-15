import { BaseError } from "@/utils/errors/BaseError";
import { ErrorTypes } from "@/types/errorTypes";
import { StatusCodes, ReasonPhrases} from "http-status-codes";

class AuthorizationError extends BaseError {
    constructor(details: Record<string, string>) {
        super(ReasonPhrases.FORBIDDEN, StatusCodes.FORBIDDEN, ErrorTypes.AUTHORIZATION, details);
    }
}

export { AuthorizationError }