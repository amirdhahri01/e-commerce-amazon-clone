//Here we define all the application level states and define actions to make changes to the state

export const initialState = {
  basket: [],
};

//Selector

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
};

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;
