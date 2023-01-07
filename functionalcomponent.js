import ReactDom from "react-dom/client"

const reactRoot = ReactDom.createRoot(document.getElementById('root'));

const HeadingFunctionalComponent = function () {
    return (
        <div id='div1' key='1000' className='fntitle'>
            <h1 id='h1' key='1'>Functional Component Heading 1</h1>
            <h2 id='h2' key='2'>Functional Component Heading 2</h2>
            <h3 id='h3' key='3'>Functional Component Heading 3</h3>
        </div>
    );
};

reactRoot.render(<HeadingFunctionalComponent/>)