import "./App.css";
import { PagesContainer } from "./pages/PagesContainer";
import GlobalStyle from "./styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <PagesContainer />
      
    </>
  );
}

export default App;
