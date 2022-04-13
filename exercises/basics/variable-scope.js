// 1.

/* 
it logs undefined because var variables are hoisted, so they're initiliazed at the start of the program,
but assigned undefined. 
*/

// 2.

/* console logs a reference error because let variables are not accessible before they're declared */

// 3.

/* the console logs a reference error because the let variable is out of scope */

// 4.

/* the console logs 1 */

// 5.

/* Let variables aren't available until the code runs, so if a let variable can't be logged before its final declaration. */

// 6.

/* 
it logs false because if a let variable with the same name is created in block scope, it can't be accessed outside.
When there are multiple let variable declarations with the same variable name, each is a separate variable.
*/

// 7.

/* the console logs 1 because a is of global scope */

// 8.

/* the console logs 2 because it is passed a variable that has 2 assigned to it. */

// 9.

/* TypeError because you cannot reassign a value to a const. */

// 10.

/*
{ firstName: 'Jane', lastName: 'Doe' } because while a new object cannot be assigned to a const, the 
values of the object can be changed.
*/