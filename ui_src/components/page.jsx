import React from 'react';
import { Button, Header, Grid, Container } from 'stardust';
import NameList from './name-list';
import $ from "jquery";

const { Column, Row } = Grid;

export default React.createClass({
	render: function() {
		return <div>
			<Container>
				<Grid padded>
					<Column>
						<Header as='h1'>Cats' Names By Gender of Owner</Header> 
						<p>Phew... That's a mouth full.. any way hear are some cat names for guys and girls..</p>
					</Column>
				</Grid>
			</Container>
			<Container>
				<Grid padded centered columns={2}>
					<Column>
						<NameList names={this.props.data.Male} heading={'Male'} />
					</Column>
					<Column>
						<NameList names={this.props.data.Female} heading={'Female'} />
					</Column>
				</Grid>
			</Container>
		</div>;
	}
});