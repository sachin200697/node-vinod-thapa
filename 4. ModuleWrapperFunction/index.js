/*
    Grouping operator: ()
    Module Wrapper Function: When we define a anynomous function in Grouping operator, this is called Module 
                            Wrapper function.
    Module: In node, every single file is a module with default scope as private. By default every module gets
    a module object to export objects or variables(like module.exports = var_name), it is because of Module
    Wrapper Function bacause node automatically wraps our module in a module wrapper function.


*/

// module wrapper function:: this is like IIFE in advance js
(function (exports, require, module, __filename, __dirname) {
	// This is why we get above arguments by default to work.
	// we can not access these arguments outside the module wrapper function, that's why every module is private
})();

//here we can not use parameter/argument variables
