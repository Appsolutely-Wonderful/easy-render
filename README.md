# EasyRender
EasyRender is an ultra lightweight, easy to use, render framework.

The top use case is for when you want to quickly implement a widget
for displaying some JSON object.

# Usage
It takes only 3 lines of javascript to use Easy Render

```javascript
import EasyRender from './easyrender.js';
let data = {title: 'Hello, World!'};
let renderer = new EasyRender('js-app', 'views/template.html', data);
```

- The first parameter `js-app` is specifying the id of the DOM element to render to.
- The second parameter `views/template.html` refers to a partial HTML file that contains the HTML to render. Object keys should be in the HTML as `{{key}}` in this case `{{title}}`
- The final parameter is the data object to render into the template.

Here's what the main html looks like
```html
<div id='js-app'></div>
```

And the partial `views/template.html`
```html
<h1>{{title}}</h1>
```

## Changing Data
If the data object changes and you'd like to re-render
the new data. Call `renderer.setState(newData)`

```javascript
data = {title: 'New Title'};
renderer.setState(data);
```
