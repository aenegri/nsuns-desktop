import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ProgramsActions from '../actions/programs-actions'
import ProgramPreviews from '../components/program-previews'

class ProgramPreviewContainer extends React.Component {
    handleClick(event) {
        this.props.addProgram("test", "test", {})
    }

    render() {
        const { programs, addProgram } = this.props
        return (
            <div>
                <ProgramPreviews programs={programs} />
                <button onClick={this.handleClick.bind(this)}>Click me!</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { programs } = state

    return {
        programs
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addProgram: ProgramsActions.addProgram
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramPreviewContainer)