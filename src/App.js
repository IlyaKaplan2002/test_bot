import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [browser, setBrowser] = useState(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("telegram")) {
      setBrowser("Telegram");
      return;
    }
    if (ua.includes("whatsapp")) {
      setBrowser("WhatsApp");
      return;
    }
    if (ua.includes("viber")) {
      setBrowser("Viber");
      return;
    }
    if (ua.includes("twitter")) {
      setBrowser("Twitter");
      return;
    }
    if (ua.includes("discord")) {
      setBrowser("Discord");
      return;
    }
    if (ua.includes("instagram")) {
      setBrowser("Instagram");
      return;
    }
    if (ua.includes("tiktok")) {
      setBrowser("TikTok");
      return;
    }
    setBrowser("not in-app");
  }, []);

  const goToDefault = () =>
    (window.location.href = `https://${window.location.host}`);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You are in {browser} browser</p>
        <p>{navigator.userAgent}</p>
        {browser !== "not in-app" && (
          <button type="button" onClick={goToDefault}>
            Go to default browser
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
