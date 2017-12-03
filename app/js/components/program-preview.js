const React = require('react')
const ReactDOM = require('react-dom')

class ProgramPreview extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="program-preview">
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

module.exports = ProgramPreview