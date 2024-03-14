interface Action {
    type: string;
    payload: any; 
}
  
interface State {}
  
const initialState: State = {};
  
const reducer = (state: State =initialState, action: Action): State => {
    switch (action.type) {
      
      default:
        return state;
    }
};
  
export default reducer;
  
