import { Grid2, Card, CardMedia, Typography, Button, Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';

export const ProductPage = () => {
	const params = useParams();
	const product = useProduct(params.id);

	return (
		<Grid2 container spacing={4} sx={{ padding: '20px' }}>
			<Grid2 xs={12} md={6}>
				<Card>
					<CardMedia
						component="img"
						alt={product.name}
						image={product.imageUrl}
						title={product.name}
					/>
				</Card>
			</Grid2>
			<Grid2 xs={12} md={6}>
				<Typography variant="h4" gutterBottom>
					{product.name}
				</Typography>
				<Rating value={product.tvShows.length} precision={0.5} readOnly />
				<Typography variant="body1" color="textSecondary">
					{product.description}
				</Typography>
				<Button variant="contained" color="primary" size="large">
					Редактировать
				</Button>
			</Grid2>
		</Grid2>
	);
};
