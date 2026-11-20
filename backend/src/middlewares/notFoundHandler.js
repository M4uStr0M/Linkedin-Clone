import ApiError  from "../utills/api-error.js";

const notFoundHandler = (req, res, next) => {
  next(ApiError.notFound(`Route not found: ${req.originalUrl}`));
};

export default notFoundHandler;
