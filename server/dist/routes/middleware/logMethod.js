//Middleware functions take in the Request object, the Response object, and the next function to execute for this route.
const logMethod = (_req, _res, next) => {
    // this will look the http method (GET, POST, etc) and the current timestamp.
    console.log(`${_req.method}%c request received: ${new Date()}\nAt: ${_req.url}\nWith IP: ${_req.ip}`);
    console.log("=====");
    // calling the next function will continue with the route, without it all your requests will hang.
    next();
};
export default logMethod;
