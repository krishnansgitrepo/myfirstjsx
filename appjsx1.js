import ReactDom from "react-dom/client"

const reactRoot = ReactDom.createRoot(document.getElementById('root'));

const jsxRendering = (
<div id="div1" key="4" className="jsxtitle">
    
    <h1 id="h1" key="1">Using Jsx Heading 1</h1>
    <h2 id="h2" key="2">Using Jsx Heading 2</h2>
    <h3 id="h3" key="3">Using Jsx Heading 3</h3>
</div>
);

reactRoot.render(jsxRendering);