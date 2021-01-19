import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
import {
  transactionListSelector,
  transactionListLoadingStateSelector,
} from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => ({
  transactions: transactionListSelector(state),
  loading: transactionListLoadingStateSelector(state),
});
// const { ids, entities, loadingState } = state.transactions;
// const transactions = ids.map((id) => entities[id]);
// const loading = loadingState[FETCH_TRANSACTION_LIST];

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
