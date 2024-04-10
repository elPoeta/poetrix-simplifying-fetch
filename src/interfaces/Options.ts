import { METHOD } from "../@types/methodTypes";

export interface IOptions<T> {
	method?: METHOD;
	body?: T;
	headers: Headers;
}


