
import { SELECT } from '../reducers/configReducer';
export const selectCell = (cellId, value) => {
	return {
		type: SELECT,
		cellId,
		value,
	}
}
