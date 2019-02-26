import React from 'react';
import {browserHistory, Router} from 'react-router';

// 所有页面的 View 在此处导入


const Routes = () => (
    <Router history={browserHistory}>
        {/*<Route path='/' component={...}>
            <IndexRoute component={...}/>
            <Route path='/...' component={...} onEnter={...}/>
        </Route>*/}
    </Router>
);

export default Routes;