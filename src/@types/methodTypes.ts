const METHODS = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	PATCH: "PATCH",
	DELETE: "DELETE",
} as const;

export type { METHODS };
export type METHOD = typeof METHODS[keyof typeof METHODS];



