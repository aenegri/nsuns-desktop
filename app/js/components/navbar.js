const React = require('react')

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-head">
                        <button type="button" className="navbar-toggle collapsed"
                            data-toggle="collapse" data-target="navbar-content"
                            aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">nSuns</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-content">
                        <ul className="nav navbar-nav">
                            <li className="active">Current</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}