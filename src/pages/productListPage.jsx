import { useSelector } from 'react-redux';
import '../App.css';
import { Loader } from '../component/loader/loader';
import { PaginatedItems } from '../component/paginatedItems';

export const ProductList = () => {
	const isLoading = useSelector((state) => state.isLoading);
	return <> {isLoading ? <Loader /> : <PaginatedItems itemsPerPage={6} />}</>;
};
