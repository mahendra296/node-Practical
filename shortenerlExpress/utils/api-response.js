class ApiResponse {
    constructor(success, message, data = null, timestamp = new Date()) {
        this.success = success;
        this.message = message;

        // Only include data if it's not null (similar to @JsonInclude(NON_NULL))
        if (data !== null && data !== undefined) {
            this.data = data;
        }

        this.timestamp = timestamp;
    }

    // Static factory method for success with data and message
    static success(data, message = "Operation successful") {
        return new ApiResponse(true, message, data, new Date());
    }

    // Static factory method for success with only message (no data)
    static successMessage(message) {
        return new ApiResponse(true, message, null, new Date());
    }

    // Static factory method for error
    static error(message) {
        return new ApiResponse(false, message, null, new Date());
    }

    // Convert to JSON (automatically called by JSON.stringify)
    toJSON() {
        const obj = {
            success: this.success,
            message: this.message
        };

        // Only include data if it exists
        if (this.data !== undefined) {
            obj.data = this.data;
        }

        obj.timestamp = this.timestamp;

        return obj;
    }
}

export default ApiResponse;
