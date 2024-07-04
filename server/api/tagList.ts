
import client from "./client";
import type { Tag } from "~/types/product";

export default defineEventHandler(async(event) => {

	const queries = {
		limit: 7
	};

	const data = await client.getList<Tag>({
			endpoint: "tag",
			queries: queries
	});

	return data;
});