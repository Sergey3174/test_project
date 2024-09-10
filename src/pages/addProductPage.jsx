import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/addProduct';
import { useState } from 'react';

export const AddProductForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [imgUrl, setImgUrl] = useState(null);

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		data._id = Date.now();
		data.isFavourite = false;
		data.imageUrl = imgUrl;
		data.tvShows = [1, 2, 3];
		data.createdAt = new Date().toDateString();
		dispatch(addProduct(data));
		reset();
		setImgUrl(null);
	};

	const onDownloadImg = async () => {
		const res = await fetch('https://loremflickr.com/320/240/dog');
		setImgUrl(res.url);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}
		>
			<Typography variant="h5" component="h2" gutterBottom>
				Добавить персонажа
			</Typography>

			<TextField
				label="Имя персонажа"
				variant="outlined"
				fullWidth
				margin="normal"
				{...register('name', { required: 'Название обязательно' })}
				error={!!errors.name}
				helperText={errors.name?.message}
			/>

			<TextField
				label="Описание"
				variant="outlined"
				fullWidth
				margin="normal"
				multiline
				rows={4}
				{...register('description', { required: 'Описание обязательно' })}
				error={!!errors.description}
				helperText={errors.description?.message}
			/>

			{imgUrl && <img src={imgUrl} />}

			<Button
				variant="contained"
				color="primary"
				fullWidth
				sx={{ mt: 3 }}
				onClick={onDownloadImg}
			>
				Сгенерировать картинку
			</Button>

			<Button
				type="submit"
				variant="contained"
				color="primary"
				fullWidth
				sx={{ mt: 3 }}
			>
				Добавить персонажа
			</Button>
		</Box>
	);
};
