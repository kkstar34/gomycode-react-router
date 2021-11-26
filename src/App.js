import logo from "./logo.svg";
import "./App.css";
import { Link, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Category } from "./components/Category";
import { Products } from "./components/Products";
import store from "./store";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import Error404 from "./components/Error404";
function App() {

  const data = [
    {
        id : 1,
        name : 'Kouyate',
        lastName : 'Karim',
        age : 18,
    }, {
        id : 2,
        name : 'Isaac',
        lastName : 'Abba',
        age : 15,
    },  
    {
        id : 3,
        name : 'Loic',
        lastName : 'Fian',
        age : 34
    }
]
  return (
    <Provider store={store}>
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {data.map(user => (
               <li>
               <Link to={`/category/${user.id}`}>{user.name}</Link>
             </li>
            ))}
           
           
            {/* <li><Link to="/products/create">Products create</Link></li> */}
          </ul>
        </nav>

        <Route path="/home" component={Home} />
        <Route  exact path="/category" component={Category} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/create" component={Category} />
        {/* <Route  component={Error404} /> */}
        <Route
        exact
          path="/category/:id"
          render={(props) => <Category {...props} data={data}/>}
        />
      </div>
    </Provider>
  );
}

export default App;
