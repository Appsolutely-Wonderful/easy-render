/**
 * Easy renderer. The super simple rendering framework
 */
export default class EasyRender {
    /**
     * Construct an easy renderer.
     * args:
     *  - id - The id of the container to render to
     *  - template - Path to the template to render
     */
    constructor(id, template, data) {
        // Store the container to render to
        this.container = document.getElementById(id);
        // The instance isn't ready until the template is loaded
        this._ready = false;
        // Begin loading the template asynchronously
        this._downloadTemplate(template);
        this.data = data;
    }

    setState(data) {
        this.data = data;
        if (this._ready) {
            this.render();
        }
    }

    /**
     * Downloads the template
     */
    _downloadTemplate(path) {
        let renderer = this;
        var r = new XMLHttpRequest();
        r.open("GET", path, true);
        r.onreadystatechange = function () {
          if (r.readyState != 4 || r.status != 200) {
              return;
          }
          if (r.readyState == 4 && r.status != 200) {
              console.log("Failed to load " + path);
              return;
          }

          renderer.template = r.responseText;
          renderer._ready = true;
          renderer.render();
        };
        r.send();
    }

    /**
     * Fills the template with stored data
     */
    _fillTemplate() {
        let keys = Object.keys(this.data);
        let html = this.template;
        // The template should be filled with {{variable}} which will be
        // replaced with the value of 'variable'
        for (const key of keys) {
            html = html.replace("{{" + key + "}}", this.data[key]);
        }
        return html;
    }

    /**
     * Renders the template into the DOM
     */
    render() {
        let html = this._fillTemplate();
        this.container.innerHTML = html;
    }
}
