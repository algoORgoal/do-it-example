import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import notificationsEffects from '../middlewares/notificationsEffects';
import transactionEffects from '../middlewares/transactionEffects';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import searchFilterEffects from '../middlewares/searchFilterEffects';
import routerEffects from '../middlewares/routerEffects';

const customMiddleware = (store) => (nextRunner) => (action) => {
  console.log('액션 객체', action);
  console.log('리듀서 실행 전', store.getState());
  const result = nextRunner(action);
  console.log('리듀서 실행 후', store.getState());
  return result;
};

const customMiddleware1 = (store) => (nextRunner) => (action) => {
  if (action.type === SET_TRANSACTION_LIST) {
    return nextRunner({
      ...action,
      payload: [
        {
          id: 0,
          code: 'DOIT',
          name: '두잇코인(DOIT)',
          totalPrice: 1000000000,
          currentPrice: 25000,
          datetime: '현재시간',
        },
      ],
    });
  }
  return nextRunner(action);
};

const customMiddleware2 = (store) => (nextRunner) => (action) => {
  const result = nextRunner(action);
  return result;
};

// export default (initStates) =>
//   createStore(combineReducers(reducers), initStates, composeWithDevTools());

// export default (initStates) =>
//   createStore(combineReducers(reducers), initStates, applyMiddleware(customMiddleware));

export default (initStates) =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        reduxPackMiddleware,
        notificationsEffects,
        transactionEffects,
        searchFilterEffects,
        routerEffects,
      ),
    ),
  );
