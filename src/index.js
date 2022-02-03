//grab 4 buttons by id's
//grab onclick listeners
//npm install redux
import {createStore} from "redux"

const add5 =document.getElementById('add5')
const add25 =document.getElementById('add25')
const subtract5 =document.getElementById('subtract5')
const subtract25 =document.getElementById('subtract25')

// add5.onclick = () => console.log("Add 5")
// Expects an action object as an argument
add5.onclick = () => store.dispatch({type: "add", amount: 5})
add25.onclick = () => store.dispatch({type: "add", amount: 25})
subtract5.onclick = () => store.dispatch({type: "subtract", amount: 5})
subtract25.onclick = () => store.dispatch({type: "subtract", amount: 25})

/* 
Setting up Redux:
1. createStore(): create our redux store
2. store.subscribe(): listen for any changes to our state
3. store.getState(): get current state
3. store.dispatch(): for sending out an action object to your reducer
5. Define a reducer (any name) which is passed to createStore()
*/

//Define reducer to return new state 
//Takes two arguments: (takes currentState, and dispatchedAction)
// const currentState = {
//     total: 0
// }
const reducer = (currentState ={total: 0}, action) => {
    switch (action.type) {
        case "add":
            return {total: currentState.total + action.amount}
    }
}
//create my redux store (expects a reducer)
//in order to get state, we set createstore to a variable named store
// dispatching on createstore that you are also subscribing to
const store = createStore(reducer)
store.subscribe(() => {
    console.log("Store state changed: ", store.getState())
})
