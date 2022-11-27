# WEB API

## Controller and Action
01. The fundamental idea of having a web api is that we will have clients that will make HTTP requests to our web api. <br/>
02. An action is a method of a controller that is executed in response to an HTTP request made to our web api <br/>
03. A controller is a class that groups a set of actions. <br/>

## Routing Rules
01. The routing rules are what allow us to map a URL with an action.  <br/>
02. The Route attribute allows us to indicate the base of the endpoint of the controller actions. <br/>

## ActionResult
01. Class that represents all type of data from an action.
02. The ActionResult class is a base class of all result classes, so it can be the return type of action
method that returns any result.

## IActionResult
01. Return any kind of ActionResult.
02.  `return Ok(genre);` 200 OK - genre as part of the body of the response

## Asynchronous Programming
01. Action can be synchronous or asynchronous.
02. While function is executing, our web server - instead of waiting for it to end, better do other tasks in the meantime.
03. There is performance cost when using asynchronous functions.
04. They are ideal for when we **use a database** or do **operations with other web services**.