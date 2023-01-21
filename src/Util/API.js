import { getTable } from "./DatabaseFunctions";
var dummy = null
export const test = (tableName) => {
	getTable(tableName).then((data) => {
		dummy = data[0]
	})
	return dummy
}