import * as React from 'react'
import '../style/PlotStyle.css'

export interface IPlotProps {
    name: string
    enthusiasmLevel?: number
    onIncrement?: () => void
    onDecrement?: () => void
    onNameChange?: (n: string) => void
}

class Plot extends React.Component<IPlotProps, object> {
    public render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement, onNameChange = (n:string) => null } = this.props
        const getNewValue = (e: React.ChangeEvent<HTMLInputElement>) => onNameChange(e.target.value)
        if (enthusiasmLevel === undefined || enthusiasmLevel < 1){ throw new Error(`Invalid enthusiasmLevel: ${enthusiasmLevel}`) }
        return (
            <div className="plot">
                <div className="body-container">
                    <div className={"salutation"} style={{ animationDuration: `${8/(enthusiasmLevel**2)}s` }}>Hi there { name + getExclamationMarks(enthusiasmLevel) }</div>
                    <div className="button-container">
                        <button onClick={onDecrement}>Damper</button>
                        <button onClick={onIncrement}>Excite</button>
                        <br />
                        <input type="text" value={name} defaultValue={name} onChange={getNewValue} />
                    </div>
                </div>
            </div>
        )
    }

}

function getExclamationMarks(count: number){
    return "!".repeat(count)
}

export default Plot