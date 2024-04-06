const METHODS = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	PATCH: "PATCH",
	DELETE: "DELETE",
} as const;

export type METHODS = typeof METHODS[keyof typeof METHODS];



