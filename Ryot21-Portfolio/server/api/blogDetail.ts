
import client from "./client";
import type { Blog } from "~/types/blog";

export default defineEventHandler(async(event) => {
	
	// 投稿記事IDを取得
	const params = getQuery(event);
	const slug = params.slug;

	const data = await client.getListDetail<Blog>({
		endpoint: "blogs",
		contentId: String(slug),
	});

	return data;
});