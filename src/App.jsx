import { Toaster } from 'react-hot-toast';
import MainComponetContainer from "./components/MainComponetContainer";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./stores/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>               
        <MainComponetContainer />
        <Toaster />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
