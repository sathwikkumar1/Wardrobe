import { ActionTypes } from "../constants/action-types";

const initialState = {
    products:[] ,
    filteredProducts:[]
}

export const productReducer = (state = initialState,{type,payload}) => {
    switch (type)  {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};


        case ActionTypes.FETCH_PRODUCTS:
                return {...state, products : payload , filteredProducts : payload};


        case ActionTypes.FILTER_CATEGORY:
            let filteredProducts
            if(payload!=null) {
             filteredProducts= state.products.filter(product=> payload.includes(product.category));
            } else {
                filteredProducts = state.products
            }
                    return {
                        ...state,
                        filteredProducts:filteredProducts ,
                        selectedCategories : payload
                      }; 


        case ActionTypes.SEARCH_TERM:
            let searchedProducts
            if(payload!=null){
                searchedProducts = state.products.filter(product => product.title.toLowerCase().includes(payload.toLowerCase()))
            }else {
                searchedProducts = state.products;
            }
            return {
                ...state,
                filteredProducts:searchedProducts,
                searchTerm:payload
            }


            case ActionTypes.SORT_BY:
                let sortedProducts;
                if (payload === 'hightoLow') 
                  sortedProducts = [...state.products].sort((a, b) => parseInt(b.price) - parseInt(a.price));
                else if (payload === 'lowtoHigh')
                  sortedProducts = [...state.products].sort((a, b) => parseInt(a.price) - parseInt(b.price));
                else if (payload === 'alphabetical')
                  sortedProducts = [...state.products].sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
                else
                  return state; // Default case, return the current state if the action type is not recognized
              
                return {
                  ...state,
                  filteredProducts: sortedProducts,
                  sortBy: payload,
                };
              
              

        default:
            return state;
}
}

export const selectedProductReducer = (state = {},{type,payload}) => {
    switch (type) {
         case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload}; 
         case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {}; 
        default:
            return state;
}
}
