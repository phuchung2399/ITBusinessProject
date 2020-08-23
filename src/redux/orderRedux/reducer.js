import * as types from '../constants/actionTypes';

const initState = {
  dataOrders: {},
  dataOrderDetail: [],
  messageOrderSuccess: [],
  messageCancelOrderSuccess: [],
  error: {},
  cartItems: [],
  store_id: '',
  loading: false,
};
const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ALL_ORDER:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        dataOrders: action.payload,
        loading: false,
      };
    case types.GET_ALL_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case types.GET_ORDER_DETAIL:
      return {...state, loading: true};

    case types.GET_ORDER_DETAIL_SUCCESS:
      return {...state, dataOrderDetail: action.payload, loading: false};

    case types.GET_ORDER_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case types.CREATE_ORDER:
      return {...state, loading: true};

    case types.CREATE_ORDER_SUCCESS:
      return {...state, messageOrderSuccess: action.payload, loading: false};

    case types.CREATE_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case types.CANCEL_ORDER:
      return {...state, loading: true};

    case types.CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        messageCancelOrderSuccess: action.payload,
        loading: false,
      };

    case types.CANCEL_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case types.ADD_CART:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };

    case types.DELETE_ALL_CART:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };

    case types.DELETE_STORE_ID:
      return {
        ...state,
        store_id: action.payload,
        loading: false,
      };

    case types.ADD_STORE_ID:
      return {
        ...state,
        store_id: action.payload,
        loading: false,
      };

    case types.DELETE_CART:
      return {...state, cartItems: action.payload};

    default:
      return state;
  }
};

export default orderReducer;
