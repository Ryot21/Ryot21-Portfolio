import client from "./client";
import type { Product } from "~/types/product";

export default defineCachedEventHandler(async(event) => {

	const queries = getQuery(event)
	const data = await client.getList<Product>({
			endpoint: "products",
			queries: queries
	});

	return data;
});