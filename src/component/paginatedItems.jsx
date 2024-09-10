import { useEffect, useState } from 'react';
import { CardProduct } from './cardProduct';
import { Grid2, Pagination, Stack } from '@mui/material';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFavourite } from '../actions/setFavourite';
import { removeProduct } from '../actions/removeRroduct';
import { selectProducts } from '../selectors/selectProducts';
import { Link } from 'react-router-dom';

export function PaginatedItems({ itemsPerPage }) {
	const [currentPage, setCurrentPage] = useState(1);
	const dispatch = useDispatch();

	const isFavouriteFlag = useSelector((state) => state.isFavouriteFlag);
	const searchPhrase = useSelector((state) => state.searchPhrase);
	let products = useSelector(selectProducts);

	if (isFavouriteFlag) {
		products = products.filter((product) => product.isFavourite);
	}

	if (searchPhrase) {
		products = products.filter((product) =>
			product.name.toLowerCase().includes(searchPhrase.toLowerCase()),
		);
	}

	useEffect(() => {
		setCurrentPage(1);
	}, [isFavouriteFlag, searchPhrase]);

	const pageCount = Math.ceil(products.length / itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

	return (
		<>
			<Grid2 container spacing={5} m={1}>
				{currentItems.length
					? currentItems.map((product) => (
							<Link
								key={product._id}
								to={`/products/${product._id}`}
								className="link"
							>
								<CardProduct
									product={product}
									onChangeIsFavourite={() =>
										dispatch(setFavourite(product._id))
									}
									onRemoveProduct={() =>
										dispatch(removeProduct(product._id))
									}
								></CardProduct>
							</Link>
						))
					: 'Список пуст'}
			</Grid2>

			<Stack spacing={2} alignItems="center">
				<Pagination
					count={pageCount}
					page={currentPage}
					onChange={handlePageChange}
					color="primary"
				/>
			</Stack>
		</>
	);
}
