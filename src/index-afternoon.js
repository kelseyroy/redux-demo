import React from 'react';
import { ReactDOM } from 'react-dom';
import store, { increment } from './store'
//REACT-REDUX: Will take away the need for subscribe, unsubscribe, and action dispatches
import { connect, Provider } from 'react-redux';

const Counter = (props) => {
    //props.count (variable accessible via mapStateToProps)
    //props.increment(function accessible via mapStateToProps)
    console.log(props)
    return (
        <div id='container'>
            <div id='counter'>
                <h1>{props.count}</h1>
                <button onClick={props.increment}>Increment</button>
            </div>
        </div>
    )
}

//Connect(): connect our store to ourReact components by mapping state and action dispatches held in our 
// Redux store to the props of our React component
//Provider: new component available through react-redux that will make our redux store available to our 
// components through our connect() call

//1. mapStateToProps: telling connect which pieces of Redux state the component will have access to
//map = transform
//state = information from redux
//to
//props = props from our <Counter/>
//the OBJECT YOU RETURN FROM mapStateToProps (aka the first function to connect)
//each key on that object becomes a prop for your component
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

//2. mapDispatchToProps: telling connect which action dispatches the component should be able to make
//think of this dispatch parameter as store.dispatch()
//map = transform
//dispatch = how we send an instruction to Redux
//to
//props = props for our <Counter />
//when action is called, it will dispatch or send a request to the redux store, and what we get back is 
//the function defined in the store, imported into this new file
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment())
        //dispatch({type: "INCREMENT"})
    }
}

// const returnedFunction = connect(mapStateToProps, mapDispatchToProps)
// returnedFunction(Counter); equivalent to:

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedCounter />,
    </Provider>,
    document.getElementById('app')
)

/*
In order to use connect(), you have to:
1. Define mapStateToProps
2. Define mapDispatchToProps
3. Wrap your CONNECTED component in aProvider component, and pass that in as your props
*/