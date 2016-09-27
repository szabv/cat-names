import React from 'react';
// import { Button, Header, Grid, Container } from 'stardust';
import Page from './page';
import $ from "jquery";

// const { Column, Row } = Grid;

export default React.createClass({
	getInitialState: function() {
    return { Male: [], Female: [] };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.dataUrl, function (result) {
      this.setState( JSON.parse( result ));
    }.bind(this));
  },

	render: function() {
		console.log(this.state);
		return <Page data={this.state} />;
	}
});


