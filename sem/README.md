# Sem

Sem is a UI library for modifying on-screen elements with profound ease. Access or modify elements as if they were JavaScript objects. Sem includes two main functions: ```$``` and ```Template```.

## ```$[function:Function]```

```var element = $(id);```
```[Object]```

Expects one parameter: the id of the target element. Returns an object with multiple getters, setters, properties and methods associated with the element's content, design and layout. This includes element text, value, and design-associated properties like background-color, border, font-size and more.

Types of properties:
- [Content](#content)
- [Text and font](#text-and-font)
- [Visibility](#visibility)
- [Background and border](#background-and-border)
- [Image](#image)
- [Size and position](#size-and-position)
- [Slider properties](#slider-properties)
- [Select elements](#select-elements)
- [HTML and CSS](#html-and-css)

### Content

```element.elt```
```[String]```

&emsp;Returns element id. Only getter.

```element.text```
```[String]```

&emsp;Returns element text content. Uses ```getText()``` internally.

```element.text = [String]```

&emsp;Sets element text content. Uses ```setText()``` internally.

```element.num```
```[Number]```

&emsp;Returns a numeric value held by the element (for sliders etc.) Uses ```getNumber()``` internally.

```element.num = [Number]```

&emsp;Sets element's numeric value. Uses ```setNumber()``` internally.

```element.placeholder```
```[String]```

&emsp;Returns placeholder value of input element. Uses ```getProperty()``` internally.

```element.placeholder = [String]```

&emsp;Sets placeholder value of input element. Uses ```setProperty()``` internally

```element.readonly```
```[Boolean]```

&emsp;Returns Boolean indicating whether textarea is readonly or not. Uses ```getProperty()``` internally.

```element.readonly = [String]```

&emsp;Sets readonly property of textarea. Uses ```setProperty()``` internally

### Text and font

```element.fontSize```
```[Number]```

&emsp;Returns element font-size. Uses ```getProperty()``` internally.

```element.fontSize = [Number]```

&emsp;Sets element font-size. Uses ```setProperty()``` internally

```element.fontFamily```
```[String]```

&emsp;Returns element font-family. Uses ```getProperty()``` internally.

```element.fontFamily = [String]```

&emsp;Sets element font-family. Uses ```setProperty()``` internally

```element.textColor```
```[String]```

&emsp;Returns element text-color in rgb format. Uses ```getProperty()``` internally.

```element.textColor = [String || rgb(red,green,blue)]```

&emsp;Sets element text-color. Uses ```setProperty()``` internally

```element.textAlign```
```["left" || "right" || "center" || "justify"]```

&emsp;Returns element text-align in rgb format. Uses ```getProperty()``` internally.

```element.textAlign = ["left" || "right" || "center" || "justify"]```

&emsp;Sets element text-align. Uses ```setProperty()``` internally

### Visibility

```element.delete()```
&emsp;Removes element from HTML document. Uses ```deleteElement()``` internally.

```element.hidden```
```[Boolean]```

&emsp;Returns true if the element is hidden from view, else returns false. Uses ```getProperty()``` internally.

```element.hidden = [Boolean]```

&emsp;Sets element hidden property. Uses ```setProperty()``` internally

```element.hide(Number?)```
&emsp;Temporarily hides element from view, optionally after elapse of [parameter] milliseconds. Uses ```hideElement()``` and ```timedLoop()``` internally.

```element.show(Number?)```
&emsp;Brings element back to view, optionally after elapse of [parameter] milliseconds. Uses ```showElement()``` and ```timedLoop()``` internally.

### Background and border-related

```element.backgroundColor```
```[String]```

&emsp;Returns element background-color in rgb format. Uses ```getProperty()``` internally.

```element.backgroundColor = [String || rgb(red,green,blue)]```

&emsp;Sets element background-color. Uses ```setProperty()``` internally

```element.borderColor```
```[String]```

&emsp;Returns border-color of element. Uses ```getProperty()``` internally.

```element.borderColor = [String]```

&emsp;Sets border-color of element. Uses ```setProperty()``` internally

```element.borderRadius```
```[Number]```

&emsp;Returns border-radius of element. Uses ```getProperty()``` internally.

```element.borderRadius = [Number]```

&emsp;Sets border-radius of element. Uses ```setProperty()``` internally

```element.borderWidth```
```[Number]```

&emsp;Returns border-width of element. Uses ```getProperty()``` internally.

```element.borderWidth = [Number]```

&emsp;Sets border-color of element. Uses ```setProperty()``` internally

### Image

```element.image```
```[String]```

&emsp;Returns image url/source of image element. Uses ```getProperty()``` internally.

```element.image = [String]```

&emsp;Sets image element's image source. Uses ```setProperty()``` internally

```element.fit```
```["fill" || "cover" || "contain" || "none"]```

&emsp;Returns image fit type. Uses ```getProperty()``` internally.

```element.fit = ["fill" || "cover" || "contain" || "none"]```

&emsp;Sets image fit type. Uses ```setProperty()``` internally

```element.iconColor```
```[String]```

&emsp;Returns icon color if image element contains an icon. Uses ```getProperty()``` internally.

```element.iconColor = [String]```

&emsp;Sets image element's icon color. Uses ```setProperty()``` internally

### Size and position

```element.height```
```[Number]```

&emsp;Returns height of element. Uses ```getProperty()``` internally.

```element.height = [Number]```

&emsp;Sets height of element. Uses ```setProperty()``` internally

```element.width```
```[Number]```

&emsp;Returns width of element. Uses ```getProperty()``` internally.

```element.width = [Number]```

&emsp;Sets width of element. Uses ```setProperty()``` internally

```element.size```
```[Array:[Number,Number]]```

&emsp;Returns array containing height and width values respectively. Uses ```getProperty()``` internally.

```element.size = [Array:[Number,Number]]```

&emsp;Sets element height to array item 0 and width to array item 1. Uses ```setProperty()``` internally

```element.x```
```[Number]```

&emsp;Returns x position of element. Uses ```getProperty()``` internally.

```element.x = [Number]```

&emsp;Sets x position of element. Uses ```setProperty()``` internally

```element.y```
```[Number]```

&emsp;Returns y position of element. Uses ```getProperty()``` internally.

```element.y = [Number]```

&emsp;Sets y position of element. Uses ```setProperty()``` internally

```element.position```
```[Array:[Number,Number]]```

&emsp;Returns array containing x and y position values respectively. Uses ```getProperty()``` internally.

```element.position = [Array:[Number,Number]]```

&emsp;Sets element x position to array item 0 and y position to array item 1. Uses ```setProperty()``` internally

### Slider properties

```element.value```
```[Number]```

&emsp;Returns current numeric value of slider. Uses ```getProperty()``` internally.

```element.value = [Number]```

&emsp;Sets numeric value of slider. Uses ```setProperty()``` internally

```element.min```
```[Number]```

&emsp;Returns min value of slider. Uses ```getProperty()``` internally.

```element.min = [Number]```

&emsp;Sets min of slider. Uses ```setProperty()``` internally

```element.max```
```[Number]```

&emsp;Returns max value of slider. Uses ```getProperty()``` internally.

```element.max = [Array]```

&emsp;Sets max value of slider. Uses ```setProperty()``` internally

```element.range```
```[Array:[Number,Number]]```

&emsp;Returns array containing slider min and max values respectively. Uses ```getProperty()``` internally.

```element.range = [Array:[Number,Number]]```

&emsp;Sets slider min to array item 0 and max to array item 1. Uses ```setProperty()``` internally

```element.step```
```[Number]```

&emsp;Returns step property of slider. Uses ```getProperty()``` internally.

```element.step = [Number]```

&emsp;Sets step property of slider. Uses ```setProperty()``` internally

### Select elements

```element.groupId```
```[String]```

&emsp;Returns group-id of radio button. Uses ```getProperty()``` internally.

```element.groupId = [String]```

&emsp;Sets group-id of radio button. Uses ```setProperty()``` internally

```element.checked```
```[Boolean]```

&emsp;Returns Boolean indicating status of radio button or checkbox. Uses ```getProperty()``` internally.

```element.checked = [Boolean]```

&emsp;Sets checked property of radio button or checkbox. Uses ```setProperty()``` internally

```element.options```
```[Array:String[]]```

&emsp;Returns array containing options inside a dropdown. Uses ```getProperty()``` internally.

```element.options = [Array:String[]]```

&emsp;Sets options property of dropdown. Uses ```setProperty()``` internally

```element.index```
```[Number]```

&emsp;Returns dropdown index. Uses ```getProperty()``` internally.

```element.index = [Number]```

&emsp;Sets dropdown index. Uses ```setProperty()``` internally

### HTML and CSS

```element.html = [String]```

&emsp;Sets element's innerHTML to provided string. Uses ```innerHTML()``` internally. Only setter.

```element.CSS = [String]```

&emsp;Sets CSS styling of element to provided string. Uses ```setStyle()``` internally. Only setter.

```element.parent = [String]```

&emsp;Appends element to the element with the matching id. Uses ```setParent()``` internally. Only setter.

```element.children = [String || Array:String[]]```

&emsp;Appends element with the matching id to element. [>=1.1.0] If argument provided is of type array, loops through array items and appends element with id of each item to element. Uses ```setParent()``` internally. Only setter.

```element.scrollX = [Boolean]```

&emsp;Enables or disables horizontal scrolling for element. Uses ```setStyle()``` internally. Only setter.

```element.scrollY = [Boolean]```

&emsp;Enables or disables vertical scrolling for element. Uses ```setStyle()``` internally. Only setter.

```element.scrollable```
```[Array:[Boolean,Boolean]]```

&emsp;Returns, in order, whether the element is horizontally and vertically scrollable. Note that this is only useful if ```element.scrollX``` or ```element.scrollY``` were previously set in the same object.

```element.scrollable = [Array:[Boolean,Boolean]]```

&emsp;Sets, in order, element's horizontal and vertical scrolling. Uses ```element.scrollX``` and ```element.scrollY``` internally.
