import ApiResponse from '../utils/api-response.js';
/**
 * Global error handler middleware
 * Must be registered after all routes
 */
const errorHandler = (err, req, res, next) => {
    // Log error for debugging (in development)
    if (process.env.NODE_ENV !== 'production') {
        console.error('Error:', err);
    }

    // Default values
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal server error';

    // Handle specific error types
    if (err.name === 'ZodError') {
        // Zod validation errors
        statusCode = 422;
        const errors = err.errors.map(e => `${e.path.join('.')}: ${e.message}`);
        message = errors.join(', ');
    } else if (err.name === 'JsonWebTokenError') {
        statusCode = 401;
        message = 'Invalid token';
    } else if (err.name === 'TokenExpiredError') {
        statusCode = 401;
        message = 'Token expired';
    } else if (err.code === 'ER_DUP_ENTRY') {
        // MySQL duplicate entry
        statusCode = 409;
        message = 'Duplicate entry';
    } else if (err.code === 'ECONNREFUSED') {
        statusCode = 503;
        message = 'Service unavailable';
    }

    // Check if request expects JSON (API request)
    const isApiRequest = req.xhr ||
        req.headers.accept?.includes('application/json') ||
        req.path.startsWith('/api/');

    if (isApiRequest) {
        // Return JSON error response
        return res.status(statusCode).json(ApiResponse.error(message));
    }

    // For non-API requests, render error page or redirect
    if (statusCode === 401) {
        req.flash('error', message);
        return res.redirect('/login');
    }

    if (statusCode === 404) {
        return res.status(404).render('404');
    }

    // Generic error page for other errors
    req.flash('error', message);
    return res.redirect('back');
};

/**
 * 404 Not Found handler
 * Should be registered after all routes but before error handler
 */
const notFoundHandler = (req, res, next) => {
    const isApiRequest = req.xhr ||
        req.headers.accept?.includes('application/json') ||
        req.path.startsWith('/api/');

    if (isApiRequest) {
        return res.status(404).json(ApiResponse.error('Resource not found'));
    }

    res.status(404).render('404');
};

/**
 * Async handler wrapper to catch errors in async route handlers
 * Usage: router.get('/path', asyncHandler(async (req, res) => { ... }))
 */
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export {
    errorHandler,
    notFoundHandler,
    asyncHandler
};
