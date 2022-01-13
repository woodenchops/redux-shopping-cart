import './App.css';
import CartPage from './Pages/CartPage';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CartPage/>
      </div>
    </Provider>
  );
}

export default App;
