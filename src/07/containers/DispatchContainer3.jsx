import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent02';
import { setLoading, resetLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';
import { setCollection, setAge } from '../actions/collectionActions';

const mapDipatchToProps = {
  setLoading,
  resetLoading,
  setAge,
  setUser,
  setCollection,
};

export default connect(null, mapDipatchToProps)(ActionComponent);
