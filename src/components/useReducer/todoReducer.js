export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((t) => t.id !== action.payload);
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );
    case "TOGGLE-OLD":
      return state.map((t) => {
        if (t.id === action.payload) {
          return {
            ...t,
            done: !t.done,
          };
        } else {
          return t;
        }
      });
    default:
      return state;
  }
};
