import { EnthusiasmAction } from '../actions/PlotActions'
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/PlotConstants'
import { IStoreState } from '../types/PlotTypes'

export function plot(state: IStoreState = { languageName: "TEST", enthusiasmLevel: 1 }, action: EnthusiasmAction): IStoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
        default:
            return state
    }
}