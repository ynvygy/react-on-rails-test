//
const Constants = {
	CHANGE_EVENT: 'change',
	ADD_COMMENT: 'comments.add'
}

class Store extends EventEmitter{
	constructor(){
		super()
		this._comments=[]
	}

	addComment (comment){
		this._comments[comment.id] = comment;
	}

	comments (){
		return this._comments;
	}

	addChangeListener (callback){
		this.on(Constants.CHANGE_EVENT, callback);
	}

	removeChangeListener (callback){
		this.removeListener(Constants.CHANGE_EVENT, callback);
	}

	emitChange (){
		this.emit(Constants.CHANGE_EVENT);
	}
};

let commentStore = new Store()

var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register((payload) => {
	switch(payload.actionType){
		case Constants.ADD_COMMENT:
			commentStore.addComment(payload.comment);
			commentStore.emitChange();
			break;
		default:
			//Not doing anything
	}
})

//Actions

class Actions {
	addComment(params){
		AppDispatcher.dispatch({
			actionType: Constants.ADD_COMMENT,
			comment: params
		})
	}
}

let commentActions = new Actions()