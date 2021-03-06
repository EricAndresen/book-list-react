export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
      
        if (serializedState === null) {
        return undefined
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined
    }
  }
  
export const saveState = (state) => {
    try {
      // TODO reduce overhead with lodash (if make add book feature)
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      // Ignore Write Errors
    }
  };
