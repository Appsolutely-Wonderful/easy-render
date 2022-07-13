import EasyRender from './easyrender.js';
let data = {
    title: 'This is set by javascript',
    seconds: 0
};
let renderer = new EasyRender('js-app', "views/template.html", data);

setInterval(() => {
    data.seconds += 1;
    renderer.render();
}, 1000);
