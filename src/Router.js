import React from 'react';
import {browserHistory, IndexRedirect, Route, Router} from 'react-router';
import {ROUTER} from './Config';
// 除了 Root（因为目前只有一个而且不变），所有页面的 View 去 ROUTER 配置文件中设置
import {View as Root} from './Pages/Root';

const {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE, REDIRECT_ROUTE} = ROUTER;

const Routes = () => (
    <Router history={browserHistory}>
        <Route path={REDIRECT_ROUTE.ROOT} component={Root}>
            <IndexRedirect to={REDIRECT_ROUTE.ACCOUNT} />
            <Route path={REDIRECT_ROUTE.ACCOUNT}>
                <IndexRedirect to={PAGE_ID_TO_ROUTE[PAGE_ID.ACCOUNT.LOGIN]} />
                {
                    Object.values(PAGE_ID.ACCOUNT).map(pageId => <Route path={PAGE_ID_TO_ROUTE[pageId]}
                                                                        component={PAGE_ID_TO_COMPONENT[pageId]}
                                                                        key={pageId} />)
                }
            </Route>
            <Route path={REDIRECT_ROUTE.INSURANCE_COMPANY}>
                <IndexRedirect to={PAGE_ID_TO_ROUTE[PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INSURANCE_LIST]} />
                {
                    Object.values(PAGE_ID.INSURANCE_COMPANY).map(pageId => <Route path={PAGE_ID_TO_ROUTE[pageId]}
                                                                                  component={PAGE_ID_TO_COMPONENT[pageId]}
                                                                                  key={pageId} />)
                }
            </Route>
            {/*<Route path={REDIRECT_ROUTE.PATIENT}>

            </Route>
            <Route path={REDIRECT_ROUTE.SERVICE_PROVIDER}>

            </Route>
            <Route path={REDIRECT_ROUTE.HOSPITAL}>

            </Route>*/}
        </Route>
    </Router>
);

export default Routes;