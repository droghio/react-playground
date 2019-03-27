import * as constants from '../constants/PlotConstants'

export interface IAlterName {
    readonly args: string,
    readonly type: constants.ALTER_NAME
}

export interface IIncrementEnthusiasm {
    readonly type: constants.INCREMENT_ENTHUSIASM
}

export interface IDecrementEnthusiasm {
    readonly type: constants.DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}


export type AlterNameAction = IAlterName

export function changeName(newName: string): IAlterName {
    return {
        args: newName,
        type: constants.ALTER_NAME
    }
}