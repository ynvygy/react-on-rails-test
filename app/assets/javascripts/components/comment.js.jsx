var Comment = createReactClass({
	propTypes: {
		author: PropTypes.string,
		body: PropTypes.string,
		rank: PropTypes.integer

	},

	render: function(){
		return(
			<div>
				<div>Author: {this.props.author}</div>
				<div>Body: {this.props.body}</div>
				<div>Rank: {this.props.rank}</div>
			</div>
			);
		}
});