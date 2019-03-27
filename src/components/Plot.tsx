import * as React from 'react'

export interface IPlotProps {
    name: string;
    enthusiasmLevel?: number;
}

class Plot extends React.Component<IPlotProps, object> {
    public render() {
        const { name, enthusiasmLevel = 1 } = this.props
        if (enthusiasmLevel === undefined || enthusiasmLevel < 1){ throw new Error("Be happy!") }
        return (
            <div className="plot">
                <div className="header">
                    Hi there { name + getExclamationMarks(enthusiasmLevel) }
                </div>
            </div>
        )
    }

}

function getExclamationMarks(count: number){
    return "!".repeat(count)
}

export default Plot
