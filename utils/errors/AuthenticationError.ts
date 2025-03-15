import { BaseError } from "@/utils/errors/BaseError";
import { ErrorTypes } from "@/types/errorTypes";
import { StatusCodes, ReasonPhrases} from "http-status-codes";


class AuthenticationError extends BaseError {
    constructor(details: Record<string, string>) {
        super(ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED, ErrorTypes.AUTHENTICATION, details);
    }
}

export { AuthenticationError }