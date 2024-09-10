import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

export const CardProduct = ({ product, onChangeIsFavourite, onRemoveProduct }) => {
	return (
		<Card sx={{ width: 345, height: 400 }}>
			<CardHeader
				sx={{ height: 50 }}
				title={product.name}
				subheader={product.createdAt}
			/>
			<CardMedia
				component="img"
				height="194"
				width="345"
				image={
					product.imageUrl ||
					'https://static.wikia.nocookie.net/disney/images/4/48/Chip_%27n_Dale_Rescue_Rangers_109_Risky_Beesness_arsenaloyal_-_YouTube12.jpg'
				}
				alt={product.name}
			/>
			<CardContent>
				<Typography
					variant="body2"
					sx={{
						display: '-webkit-box',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical',
					}}
				>
					{product.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					aria-label="add to favorites"
					color={product.isFavourite ? 'error' : 'none'}
					onClick={(event) => {
						event.preventDefault();
						onChangeIsFavourite();
					}}
				>
					<FavoriteIcon />
				</IconButton>
				<IconButton
					aria-label="delete"
					onClick={(event) => {
						event.preventDefault();
						onRemoveProduct();
					}}
				>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};
