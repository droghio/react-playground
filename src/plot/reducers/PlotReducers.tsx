import { AlterNameAction, EnthusiasmAction } from '../actions/PlotActions'
import { ALTER_NAME, DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/PlotConstants'
import { IStoreState } from '../types/PlotTypes'

const DefaultState = {
    enthusiasmLevel: 1,
    languageName: "Frosty"
}

export function plot(state: IStoreState = DefaultState, action: EnthusiasmAction|AlterNameAction): IStoreState {
    switch (action.type) {
        case ALTER_NAME:
            return { ...state, languageName: action.args}
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
        default:
            return state
    }
}