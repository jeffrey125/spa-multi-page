import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          {/* In Switch Order Matters or you can use exact*/}
          <Route path="/" exact>
            <h1 style={{ fontSize: '5.2rem' }}>The Home Page</h1>
          </Route>

          {/* 
          Redirect method
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route> */}

          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>

          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
