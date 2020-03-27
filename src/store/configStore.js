import caculatorReducer from '../reducers/caculator';
import { createStore } from 'redux'



export default ()=>{
    const store = createStore(caculatorReducer);
    return store
}
