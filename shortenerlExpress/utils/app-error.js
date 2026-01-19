/**
 * Custom application error class
 * Extends Error to include HTTP status code
 */
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true; // Marks this as an operational/expected error

        Error.captureStackTrace(this, this.constructor);
    }

    // Common error factory methods
    static badRequest(message = "Bad request") {
        return new AppError(message, 400);
    }

    static unauthorized(message = "Unauthorized") {
        return new AppError(message, 401);
    }

    static forbidden(message = "Forbidden") {
        return new AppError(message, 403);
    }

    static notFound(message = "Resource not found") {
        return new AppError(message, 404);
    }

    static conflict(message = "Conflict") {
        return new AppError(message, 409);
    }

    static validationError(message = "Validation failed") {
        return new AppError(message, 422);
    }

    static internal(message = "Internal server error") {
        return new AppError(message, 500);
    }
}

export default AppError;
