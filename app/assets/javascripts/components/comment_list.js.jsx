var CommentList = createReactClass({

	render: function(){
		return(
			<div>
				{JSON.parse(this.props.comments).map(function(comment){
					return <Comment key={comment.id} 
					{... comment} />
				})}
			</div>
			);
		}
});