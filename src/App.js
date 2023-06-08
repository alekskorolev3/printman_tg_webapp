import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        window.payment()
        tg.ready()
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
