import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
import { setFilter } from '../../actions/searchFilterActions';
import { transactionListLoadingStateSelector } from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  const { pagination, ids } = state.transactions;
  const { number, size } = pagination;
  return {
    searchParams: state.searchFilter.params,
    pageNumber: number || 1,
    hasNext: ids.length === size,
    loading: transactionListLoadingStateSelector(state),
  };
};

const mapDispatchToProps = {
  requestTransactionList,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
