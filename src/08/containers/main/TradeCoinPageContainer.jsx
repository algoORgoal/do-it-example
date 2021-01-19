import { connect } from 'react-redux';
import TradeCoinPage from '../../components/main/TradeCoinPage';
import { createTransaction, CREATE_TRANSACTION } from '../../actions/transactionPackActions';
import { transactionCreateLoadingStateSelector } from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => ({
  loading: transactionCreateLoadingStateSelector(state),
});

export default connect(mapStateToProps, { createTransaction })(TradeCoinPage);
