import ApiError from "../utills/api-error.js";


export const validate = (schema) => {


    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const error = result.error.issues[0];
            throw ApiError.conflict(error.message)

        }

        req.body = result.data;

        next();
    };
};