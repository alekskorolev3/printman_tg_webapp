import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready()
    }, [])

    // const onClose = () => {
    //     tg.close()
    // }


  return (
    <div className="App">
        <button onClick={window.payment}>Close modal</button>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MzO-0IYkZMU" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
    </div>
  );
}

export default App;
