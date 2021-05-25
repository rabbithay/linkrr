import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './GlobalStyles';

export default function App () {

    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route to='/' exact>

                </Route>
                <Route to='/sign-up' exact>

                </Route>
                <Route to='/timeline' exact>

                </Route>
                <Route to='/my-posts' exact>

                </Route>
                <Route to='/hashtag/:hashtag' exact>

                </Route>
                <Route to='/user/:id' exact>
                    
                </Route>
                <Route to='/my-likes' exact>

                </Route>
            </Switch>
        </Router>

    );

}

