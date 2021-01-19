import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from './components/AppLayout';
// import MainPage from './components/main/MainPage';
import MainPage from '../13/AsyncMainPage';
import ModalProvider from './ModalProvider';
import NotificationContainer from './containers/NotificationContainer';

import configureStore from './store/configureStore';
import NotFound from './components/NotFound';

import RouterStateContainer from './containers/RouterStateContainer';

class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <RouterStateContainer />
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="*" component={NotFound} />
                {/* <Route path="*" render={({ match }) => <NotFound match={match} />} /> */}
              </Switch>
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
