const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    return res.status(statusCode).json({
        status: false,
        message: err.message || "Internal server error",
        errors: err.errors || [],
        stack: err.stack // for development purpose
    })
}