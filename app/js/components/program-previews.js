import React from 'react'

import ProgramPreview from './program-preview'

class ProgramPreviews extends React.Component {
    renderProgramPreview(program, i) {
        return (
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                <ProgramPreview name={program.name} description={program.description} key={i} />
            </div>
        )
    }

    render() {
        return (
            <div className="row">
                {this.props.programs.map((item, i) => {
                    return this.renderProgramPreview(item, i)
                })}
            </div>
        )
    }
}

export default ProgramPreviews