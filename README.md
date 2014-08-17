# char-counter

A simple, configurable Polymer component for adding a character counter to your form fields.

#### New to Polymer?

You can read about the Polymer project here:
[http://www.polymer-project.org/](http://www.polymer-project.org/)

#### Features

- The "out the box" component (i.e. `<char-counter />`) is completely self-contained and creates its own textarea as well as the counter, but it
can be mapped to an existing input field / textarea in your form just by passing its unique ID.
- Has a maxChars option to prevent the user entering too many chars.
- Translatable. You can customize the character counter label to whatever you want to read, which by default reads
simply **N chars**.


#### How to Style

Polymer components can be styled via standard CSS. By default the default textarea that appears when no ID is specified
is unstyled, so it'll appear with whatever width and height your browser natively supplies. Here's how you can style
the elements.

##### The textarea (only if you don't supply an ID of your own input field)

```css
char-counter::shadow textarea {
	width: 100%;
	height: 100px;
	color: red;
}
```

##### The label

```css
char-counter::shadow label {
	color: green;
}
```


#### Known issues

- For some reason, using a self-closing `<char-counter />` tag results in a few space/tab characters being output as
a default value. I suspect this is a minor Polymer bug, but I'm not sure. So to get around it, always