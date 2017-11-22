import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer text-center">
                <div className="container">
                    <p className="footer-text">
                        This site is made to learn more about React Redux!
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer;