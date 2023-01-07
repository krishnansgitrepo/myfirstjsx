import ReactDom from "react-dom/client"

const reactRoot = ReactDom.createRoot(document.getElementById('root'));

const H1Tag = function () {
    return <h1 id="h1" key="1000">Heading 1 Component Using Composition</h1>
};

const H2Tag = function () {
    return <h2 id="h2" key="2000">Heading 2 Component Using Composition</h2>
}

const H3Tag = function () {
    return <h3 id="h3" key="3000">Heading 3 Component Using Composition</h3>
}

const DivTag = function () {
   return (
    <div id="div1" key="1" className="composedtitle">
        <H1Tag/>
        <H2Tag/>
        <H3Tag/>
    </div>
    );
};

reactRoot.render(<DivTag></DivTag>)

