
import './App.scss';
import Header from "./components/Header";
import ContentArea from "./components/ContentArea";
import ContactButton from "./components/contactButton";

function App() {
  return (
    <div className="App">
      <Header/>
        <ContentArea/>
        <ContactButton/>
    </div>
  );
}

export default App;
