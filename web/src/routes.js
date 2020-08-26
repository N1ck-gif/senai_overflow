import React from 'react';

// Estes componentes são nescessários para cadasrtrar as rotas da aplicação
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { isSignedIn } from './Services/security';

const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route {...rest} 
            render={({ location }) => 
                isSignedIn() ? (children) : (
                    <Redirect 
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    )
}

// Quando fala da rota raiz, tem que colocar o exact no começo, que significa exatamente a rota raiz
// path - significa o caminho

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <PrivateRoute path="/home">
                <Home />
            </PrivateRoute>
        </Switch>
    </BrowserRouter>
  )
}

export default Routes;