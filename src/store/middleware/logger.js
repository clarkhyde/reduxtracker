
//SNA 
const logger = param => store => next => action =>{
    console.log("Logging", param);
    next(action);
}

//Currying
// N => 1 - makes a bunch of functions with a single parameter

export default logger;