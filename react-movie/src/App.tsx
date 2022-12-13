import "./App.css";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";
import routes from "./route-config";
import configureValidation from "./Validation";

configureValidation();

function App() {
    return (
        <>
            <Menu />
            <div className="container">
                {/* <Switch>
          {routes.map(route => 
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.component />
          </Route>)}
        </Switch> */}
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                </Routes>
            </div>

            <footer className="bt-footer py-5 mt-5 bg-light">
                <div className="container">
                    React Movies {new Date().getFullYear().toString()}
                </div>
            </footer>
        </>
    );
}

export default App;
