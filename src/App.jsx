import { NavBar } from './component/navBar';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProductList } from './pages/productListPage';
import { setProducts } from './actions/setProducts';
import { ProductPage } from './pages/productPage';
import { AddProductForm } from './pages/addProductPage';

export function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setProducts());
	}, [dispatch]);

	return (
		<>
			<NavBar />
			<Container className="page-container">
				<Routes>
					<Route path="/" element={<ProductList />} />
					<Route path="/products/:id" element={<ProductPage />} />
					<Route path="/create-product" element={<AddProductForm />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Container>
		</>
	);
}
