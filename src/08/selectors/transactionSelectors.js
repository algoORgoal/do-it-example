// import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from '../actions/transactionPackActions';
// import { createSelector } from 'reselect';

// export const transactionsSelector = (state) => state.transactions;
// export const transactionListSelector = (state) => {
//   const { ids, entities } = transactionsSelector(state);
//   return ids.map((id) => entities[id]);
// };
// export const transactionListSelector = createSelector([transactionsSelector], (transactions) => {
//   const { ids, entities } = transactions;
//   return ids.map((id) => entities[id]);
// });

//FETCH_TRANSACION_LIST, CREATE_TRANSACTION를 키로 하여 loading State를 가져오기에 올바른 값을 가져오지 못한다.
// export const loadingStateSelector = (state) => transactionsSelector(state).loadingState;
// export const transactionListLoadingStateSelector = (state) =>
//   loadingStateSelector(state)[FETCH_TRANSACTION_LIST];
// export const transactionCreateLoadingStateSelector = (state) =>
//   loadingStateSelector(state)[CREATE_TRANSACTION];

import createSelectors from '../../11/api-redux-pack/createSelectors';

export const {
  resourceSelector: transactionSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector,
} = createSelectors('transactions');
