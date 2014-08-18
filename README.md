# &lt;char-counter /&gt;

A simple, configurable Polymer component for adding a character counter to your form fields. Check out the
demo here: [http://benkeen.github.io/char-counter](http://benkeen.github.io/char-counter)

#### New to Polymer?

You can read about the Polymer project here:
[http://www.polymer-project.org/](http://www.polymer-project.org/)

#### Features

- Can be mapped to &lt;textarea> or &lt;input> fields.
- Has a ``maxChars`` option to prevent the user entering too many chars.
- Translatable. You can customize the character counter label to whatever you want to read. By default reads
simply **N chars**.

### Usage

Using the tag is really easy.

1. Include the Polymer platform and the char-counter custom element:

```
<script src="bower_components/platform/platform.js"></script>
<link rel="import" href="elements/char-counter.html">
```

2. Place the element wherever you want in the page and specify the textarea or textfield you want the counter to
apply to.

```
<char-counter target="yourId" />
```

### Attributes

- ``target`` - **required**. The ID of the input or textarea field.
- ``maxChars`` - **optional**. The max number of characters allowed in the textarea / input field.
- ``label`` - **optional**. The text that appears for the counter. Use the placeholder *[CHARS]* inside your string - it
will be replaced by the actual character count.


#### How to Style

Polymer components can be styled via standard CSS. The &lt;char-counter&gt; element contains a single &lt;div&gt;
element containing the label.

```css
char-counter::shadow div {
	color: green;
}
```