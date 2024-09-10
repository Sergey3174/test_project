import { useSelector } from "react-redux";
import { selectProducts } from "../selectors/selectProducts";

export const useProduct = (id) =>
	useSelector(selectProducts).find(
		(product) => Number(product._id) === Number(id),
	);
