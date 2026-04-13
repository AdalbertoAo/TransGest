import type { ErrorCostumer } from "../interfaces/interface.js";

export class CustomError extends Error implements ErrorCostumer{
	statusCode: number
	constructor(message:string, statusCode:number){
		super(message);

		this.statusCode = statusCode

		if (Error.captureStackTrace)
		{
			Error.captureStackTrace(this, this.constructor)
		}
	}
}
