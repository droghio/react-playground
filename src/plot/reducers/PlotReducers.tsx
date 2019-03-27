import { EnthusiasmAction } from '../actions/PlotActions'
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/PlotConstants'
import { IStoreState } from '../types/PlotTypes'

const DefaultState = {
    enthusiasmLevel: 1,
    languageName: "TEST"
}

export function plot(state: IStoreState = DefaultState, action: EnthusiasmAction): IStoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
        default:
            return state
    }
}