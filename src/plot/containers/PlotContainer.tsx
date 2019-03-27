import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as actions from '../actions/PlotActions'
import Plot from '../components/PlotComponent'
import { IStoreState } from '../types/PlotTypes'

interface IWrappedState {
    plot: IStoreState
}

export function mapStateToProps({ plot } : IWrappedState ) {
    const { enthusiasmLevel, languageName } = plot
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction|actions.AlterNameAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onNameChange: (n: string) => dispatch(actions.changeName(n)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plot)