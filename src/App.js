import "https://js.bepaid.by/widget/be_gateway.js"
import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready()
        window.payment()
    }, [])

    const onClose = () => {
        tg.close()
    }


  return (
    <div className="App">
        <button onClick={onClose}>Close modal</button>
    </div>
  );
}

export default App;
