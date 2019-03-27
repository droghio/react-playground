import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/actions';
import Plot from '../components/Plot';
import { IStoreState } from '../types/types';

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plot);