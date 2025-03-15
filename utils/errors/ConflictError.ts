import { BaseError } from "@/utils/errors/BaseError";
import { ErrorTypes } from "@/types/errorTypes";
import { StatusCodes, ReasonPhrases} from "http-status-codes";

class ConflictError extends BaseError {
    constructor(details: Record<string, string>) {
        super(ReasonPhrases.CONFLICT, StatusCodes.CONFLICT, ErrorTypes.CONFLICT, details);
    }
}

export { ConflictError }