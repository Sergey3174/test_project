const initialState = {
	products: [],
	searchPhrase: '',
	isFavouriteFlag: false,
	isLoading: false,
};
export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return { ...state, products: action.payload };
		case 'SET_FAVOURITE':
			return {
				...state,
				products: state.products.map((product) =>
					product._id === action.payload
						? { ...product, isFavourite: !product.isFavourite }
						: product,
				),
			};
		case 'REMOVE_PRODUCT':
			return {
				...state,
				products: state.products.filter(
					(product) => product._id !== action.payload,
				),
			};
		case 'ADD_PRODUCT':
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case 'SET_SEARCH':
			return {
				...state,
				searchPhrase: action.payload,
			};
		case 'SET_FAVORITE_FLAG':
			return {
				...state,
				isFavouriteFlag: !state.isFavouriteFlag,
			};
		case 'SET_LOADING':
			return {
				...state,
				isLoading: !state.isLoading,
			};
		default:
			return state;
	}
};
