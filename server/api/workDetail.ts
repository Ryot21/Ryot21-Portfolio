
import client from "./client";
import type { Product } from "~/types/product";

export default defineEventHandler(async(event) => {
	
	// 投稿記事IDを取得
	const params = getQuery(event);
	const slug = params.slug;

	const data = await client.getListDetail<Product>({
		endpoint: "products",
		contentId: String(slug),
	});

	return data;
});