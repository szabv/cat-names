import React from 'react';
import { Button, Header, Grid, Container } from 'stardust';
import NameList from './name-list';

const { Column, Row } = Grid;

export default React.createClass({
	getInitialState: function() {
    return { Male: [], Female: [] };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.dataUrl, function (result) {
      this.setState({ animalData: JSON.parse( result ) });
    }.bind(this));
  },

	render: function() {
		return <div>
			<Container>			
				<Grid padded>
					<Column>
						<Header as='h1'>Cats' Names By Gender of Owner</Header> 
						<p>Few... That's a mouth full.. any way hear are some cat names for guys and girls..</p>
					</Column>
				</Grid>
			</Container>
			<Container>
				<Grid padded centered columns={2}>
					<Column>
						<NameList names={this.state.Male} heading={'Male'} />
					</Column>
					<Column>
						<NameList names={this.state.Female} heading={'Female'} />
					</Column>
				</Grid>
			</Container>
		</div>;
	}
});


