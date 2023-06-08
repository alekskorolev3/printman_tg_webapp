import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        window.payment()


    }, [])

    const onClose = () => {
        tg.close()
    }


  return (
    <div className="App">
        <button onClick={tg.ready()}>Close modal</button>
    </div>
  );
}

export default App;
