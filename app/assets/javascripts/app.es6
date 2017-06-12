var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register((payload) => {
    console.log(payload);
    switch(payload.actionType){
        case Constants.ADD_COMMENT:
        commentStore.addComment(payload.comment);
        commentStore.emitChange()
        break;
    default: 
        // NO-OP
    }
});

// Actions 

class Actions {
    addComment(params){
        AppDispatcher.dispatch({
            actionType: Constants.ADD_COMMENT,
            comment: params
        })
    }
}

let commentActions = new Actions()