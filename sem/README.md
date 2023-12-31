# Sem

Sem is a UI library for modifying an on-screen element with profound ease. Access or modify elements as if they were JavaScript objects. Sem includes two main functions: ```$``` and ```Template```.

## ```$[function:Function]```

```var element = $(id);```

Expects one parameter: the id of the target element. Returns an object with multiple getters, setters, properties and methods associated with the element's content, design and layout. This includes element text, value, and design-associated properties like background-color, border, font-size and more.

List of properties:

### Element content

```element.elt```
Returns element id. Only getter.

```element.text```
Returns element text content. Uses ```getText()``` internally.

```element.text = "some text here"```
Sets element text content. Uses ```setText()``` internally.

```element.num```
Returns a numeric value held by the element (for sliders etc.)

```element.num = 5```
Sets element's numeric value.

```element.placeholder```
Returns placeholder value of input element.

```element.placeholder = "some text here"```
Sets placeholder value of input element.
