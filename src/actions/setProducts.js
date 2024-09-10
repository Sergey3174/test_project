import { SET_LOADING } from './setLoading';

export const setProducts = () => (dispatch) => {
	dispatch(SET_LOADING);
	fetch('https://api.disneyapi.dev/character')
		.then((response) => response.json())
		.then(({ data }) => {
			data.forEach((product) => {
				product.isFavourite = false;
				product.description =
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus dolorem molestiae voluptas laboriosam, eos quos iste sequi laudantium sunt esse sapiente neque. Blanditiis labore maiores, accusantium vitae obcaecati id!';
			});
			dispatch({
				type: 'SET_PRODUCTS',
				payload: data,
			});
		})
		.finally(() => dispatch(SET_LOADING));
};
