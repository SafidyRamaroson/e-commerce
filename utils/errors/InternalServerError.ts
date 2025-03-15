import { ErrorTypes } from "@/types/errorTypes";
import { StatusCodes, ReasonPhrases} from "http-status-codes";
import { BaseError } from "./BaseError";

class InternalServerError extends BaseError {
    constructor(details: Record<string, string>) {
        super(ReasonPhrases.INTERNAL_SERVER_ERROR,StatusCodes.INTERNAL_SERVER_ERROR , ErrorTypes.INTERNAL, details);
    }
}

export { InternalServerError }