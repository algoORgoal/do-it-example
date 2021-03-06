// import { SET_ERROR } from '../actions/transactionActions';
import { SHOW_NOTIFICATION, showMessage, hideMessage } from '../actions/notificationActions';
import debounce from '../../02/debounce';
// import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';
import { KEY, LIFECYCLE } from 'redux-pack';

const debounceRunner = debounce((action) => action(), 4000);

export default (store) => (nextRunner) => (action) => {
  const { type, payload, meta } = action;
  if (meta && meta.notification) {
    const { success, error } = meta.notification;
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMessage(success));
    } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      store.dispatch(showMessage(error, true));
    }
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    debounceRunner(hide);
  }
  // if (type === SET_ERROR) {
  //   const { errorMessage } = payload;
  //   store.dispatch(showMessage(errorMessage, true));
  // } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
  //   const message = '거래 목록을 최신 정보로 업데이트했습니다';
  //   store.dispatch(showMessage(message));
  // } else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
  //   const { errorMessage } = payload.response.data || {};
  //   store.dispatch(showMessage(errorMessage, true));
  // } else if (type === SHOW_NOTIFICATION) {
  //   const hide = () => store.dispatch(hideMessage());
  //   debounceRunner(hide);
  // }

  return nextRunner(action);
};
