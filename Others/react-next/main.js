src="https://unpkg.com/react@18/umd/react.development.js"
src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
src="https://unpkg.com/@babel/standalone/babel.min.js"

const app = document.getElementById('app');

function Header(){
    return(<h1> hotdog ni patrick sunogg </h1>)
}

const root = ReactDOM.createRoot(app);
root.render(<Header/>);

