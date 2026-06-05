export const initialState = {}; //будим импортировать для store, а здесь он для state = initialState навсякий случай

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action; //type - название действия ,payload - нагрузка (данные)

	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
			//setUserData(payload);
			//break;
		}

		case 'SET_USER_AGE': {
			return { ...state, age: payload };
			//setUserData({ ...userData, age: payload });
			//break;
		}
		default:
			return state;
		//not doit
	}
};
