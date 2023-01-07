import ReactDom from "react-dom/client"
import {createElement as ce} from "react"

const reactRoot = ReactDom.createRoot(document.getElementById('root'));

const h1 = ce('h1', {id:'h1', key: 1}, 'heading 1');

const h2 = ce('h2', {id:'h2', key: 2}, 'heading 2');

const h3 = ce('h3', {id:'h3', key: 3}, 'heading 3');

const div = ce('div', {id: 'div1', key: 4, className: 'title'}, [h1, h2, h3]);

reactRoot.render(div);