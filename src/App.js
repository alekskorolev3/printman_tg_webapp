import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {

    }, [])

    const onClose = () => {
        tg.close()
    }


  return (
    <div className="App">
        {/*<button onClick={onClose}>Close modal</button>*/}
        {window.payment()}
    </div>
  );
}

export default App;
