# Sem

Sem is a UI library for modifying an on-screen element with profound ease. Access or modify elements as if they were JavaScript objects. Sem includes two main functions: ```$``` and ```Template```.

## ```$[function:Function]```

```var element = $(id);```

Expects one parameter: the id of the target element. Returns an object with multiple getters, setters, properties and methods associated with the element's content, design and layout. This includes element text, value, and design-associated properties like background-color, border, font-size and more.

List of properties:

### Content-related

```element.elt```

&emsp;Returns element id. Only getter.

```element.text```

&emsp;Returns element text content. Uses ```getText()``` internally.

```element.text = [String]```

&emsp;Sets element text content. Uses ```setText()``` internally.

```element.num```

&emsp;Returns a numeric value held by the element (for sliders etc.) Uses ```getNumber()``` internally.

```element.num = [Number]```

&emsp;Sets element's numeric value. Uses ```setNumber()``` internally.

```element.placeholder```

&emsp;Returns placeholder value of input element. Uses ```getProperty()``` internally.

```element.placeholder = [String]```

&emsp;Sets placeholder value of input element. uses ```setProperty()``` internally

### Text-related

```element.fontSize```

&emsp;Returns element font-size. Uses ```getProperty()``` internally.

```element.fontSize = [Number]```

&emsp;Sets element font-size. uses ```setProperty()``` internally

```element.fontFamily```

&emsp;Returns element font-family. Uses ```getProperty()``` internally.

```element.fontFamily = [String]```

&emsp;Sets element font-family. uses ```setProperty()``` internally
