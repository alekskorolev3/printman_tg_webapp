import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        window.payment()
        setTimeout(() => {
            tg.ready()
        }, 1000)

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
