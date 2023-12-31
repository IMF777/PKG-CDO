# Sem

Sem is a UI library for modifying an on-screen element with profound ease. Access or modify elements as if they were JavaScript objects. Sem includes two main functions: ```$``` and ```Template```.

## ```$[function:Function]```

```var element = $(id);```

Expects one parameter: the id of the target element. Returns an object with multiple getters, setters, properties and methods associated with the element's content, design and layout. This includes element text, value, and design-associated properties like background-color, border, font-size and more.

Types of properties:
- [Content related](#content-related)
- 

### Content-related

```element.elt [String]```

&emsp;Returns element id. Only getter.

```element.text [String]```

&emsp;Returns element text content. Uses ```getText()``` internally.

```element.text = [String]```

&emsp;Sets element text content. Uses ```setText()``` internally.

```element.num [Number]```

&emsp;Returns a numeric value held by the element (for sliders etc.) Uses ```getNumber()``` internally.

```element.num = [Number]```

&emsp;Sets element's numeric value. Uses ```setNumber()``` internally.

```element.placeholder [String]```

&emsp;Returns placeholder value of input element. Uses ```getProperty()``` internally.

```element.placeholder = [String]```

&emsp;Sets placeholder value of input element. uses ```setProperty()``` internally

### Text and font-related

```element.fontSize [Number]```

&emsp;Returns element font-size. Uses ```getProperty()``` internally.

```element.fontSize = [Number]```

&emsp;Sets element font-size. uses ```setProperty()``` internally

```element.fontFamily [String]```

&emsp;Returns element font-family. Uses ```getProperty()``` internally.

```element.fontFamily = [String]```

&emsp;Sets element font-family. uses ```setProperty()``` internally

```element.textColor [String]```

&emsp;Returns element text-color in rgb format. Uses ```getProperty()``` internally.

```element.textColor = [String || rgb(red,green,blue)]```

&emsp;Sets element text-color. uses ```setProperty()``` internally

### Visibility-related

```element.delete()```

&emsp;Removes element from the document. uses ```deleteElement()``` internally

### Background and border-related

```element.backgroundColor [String]```

&emsp;Returns element background-color in rgb format. Uses ```getProperty()``` internally.

```element.backgroundColor = [String || rgb(red,green,blue)]```

&emsp;Sets element background-color. uses ```setProperty()``` internally

### Image-related

```element.image [String]```

&emsp;Returns image url/source of image element. Uses ```getProperty()``` internally.

```element.image = [String]```

&emsp;Sets image element's image source. uses ```setProperty()``` internally

```element.fit ["fill" || "cover" || "contain" || "none"]```

&emsp;Returns image fit type. Uses ```getProperty()``` internally.

```element.fit = ["fill" || "cover" || "contain" || "none"]```

&emsp;Sets image fit type. uses ```setProperty()``` internally
