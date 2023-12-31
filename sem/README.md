# Sem

Sem is a UI library for modifying an on-screen element with profound ease. Access or modify elements as if they were JavaScript objects. Sem includes two main functions: ```$``` and ```Template```.

## ```$[function:Function]```

```var element = $(id);```

Expects one parameter: the id of the target element. Returns an object with multiple getters, setters, properties and methods associated with the element's content, design and layout. This includes element text, value, and design-associated properties like background-color, border, font-size and more.

List of properties:

### Content-Associated

```element.text```
Returns the element's text content

```element.text = "some text here"```
Sets the element's text content

``````
