import client from "./client";
import type { Blog } from "~/types/blog";

export default defineCachedEventHandler(async(event) => {

	const queries = getQuery(event)
	const data = await client.getList<Blog>({
			endpoint: "blogs",
			queries: queries
	});

	return data;
});