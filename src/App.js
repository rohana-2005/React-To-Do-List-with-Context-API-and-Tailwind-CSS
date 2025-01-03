import './App.css';
import { ListContext, ListContextProvider } from './Components/ListContext';
import Input from './Components/Input'
import Output from './Components/Output';
function App() {
  return (
    <ListContextProvider>
      <Input/>
      <Output/>
    </ListContextProvider>
  );
}

export default App;
