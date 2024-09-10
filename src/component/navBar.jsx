import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from '../utils/debounce';
import { setSearchPhrase } from '../actions/setSearchPhrase';
import { SET_FAVORITE_FLAG } from '../actions/setFavoriteFlag';

export const NavBar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const isFavouriteFlag = useSelector((state) => state.isFavouriteFlag);

	const dispatch = useDispatch();

	const changeSearchPhrase = debounce(({ target }) => {
		dispatch(setSearchPhrase(target.value));
	}, 1000);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Персонажи
					</Typography>

					{location.key !== 'default' ? (
						<IconButton aria-label="back" onClick={() => navigate(-1)}>
							<ArrowBackIcon />
						</IconButton>
					) : (
						<>
							<TextField
								label="Поиск персонажа"
								variant="filled"
								color="white"
								onChange={changeSearchPhrase}
							/>
							<IconButton
								aria-label="add to favorites"
								color={isFavouriteFlag ? 'error' : 'none'}
								onClick={() => dispatch(SET_FAVORITE_FLAG)}
							>
								<FavoriteIcon />
							</IconButton>

							<Link to="create-product">
								<IconButton aria-label="add product">
									<AddIcon />
								</IconButton>
							</Link>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};
