import React from 'react';

// ShoppingApp > Footer
class Footer extends React.Component {
	render() {
		return (
			<div id="footer">
            <p> Time Elapsed: {this.props.inactiveTime / 1000} </p>
      </div>
		);
	}
}


export default Footer;