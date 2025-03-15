import { NextResponse } from "next/server";
import { BaseError } from "@/utils/errors/index";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { ErrorTypes } from "@/types/errorTypes";

/**
 * Gère les erreurs et retourne une réponse JSON formatée.
 */
export function handleError(_error: unknown) {
    if (_error instanceof BaseError) {
      return NextResponse.json(
        {
          success: false,
          message: _error.message,
          error: _error.error,
        },
        { status: _error.error.code }
      );
    }
  
    // Gestion des erreurs inconnues
    return NextResponse.json(
      {
        success: false,
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        error: {
          code: StatusCodes.INTERNAL_SERVER_ERROR,
          type: ErrorTypes.INTERNAL,
          details: { unexpected: "Une erreur inattendue est survenue." },
        },
      },
      { status: 500 }
    );
  }
  