class ApiError extends Error {
    constructor(statusCode, message) {
        super(message)
        this.statusCode = statusCode
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }


    static badRequest(message = "Bad Request") {
        return new ApiError(400, message)
    }

    static unauthorized(message = "Unauthorized") {
        return new ApiError(400, message)
    }

    static forbidden(message = "Forbidden") {
        return new ApiError(403, message);
    }

    static notFound(message = "Resource Not Found") {
        return new ApiError(404, message);
    }

    static methodNotAllowed(message = "Method Not Allowed") {
        return new ApiError(405, message);
    }

    static conflict(message = "Resource Conflict") {
        return new ApiError(409, message);
    }

    static unprocessable(message = "Validation Failed", errors = []) {
        return new ApiError(422, message, errors);
    }

    static tooManyRequests(message = "Too Many Requests") {
        return new ApiError(429, message);
    }


    static internal(message = "Internal Server Error") {
        return new ApiError(500, message);
    }

    static serviceUnavailable(message = "Service Unavailable") {
        return new ApiError(503, message);
    }
}

export default ApiError;






// usesage
//    throw ApiError.badRequest("Email is required");
//
// throw new ApiError()