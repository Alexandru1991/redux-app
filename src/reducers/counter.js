export const counterReducer =(state = {1:0,2:0,3:0,4:0,5:0}, action) =>{
    
    let copyState = null;
    let idNew = null;
    switch(action.type){
        case 'INCREMENT':
           
            copyState = {...state};
            idNew = action.payload.id;
            const counter= copyState[idNew] ? copyState[idNew] + 1 : 1;
            return Object.assign(copyState,{[idNew] : counter })
           
        case 'DECREMENT':
            copyState = {...state};
            idNew = action.payload.id;
            const decounter= copyState[idNew] ? copyState[idNew] - 1 : 0;
            return Object.assign(copyState,{[idNew] : decounter })
        default :
            return state
    }
}
