import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInfo } from 'api/user';

export type StateType = {
	nickname: string;
	userType: string;
	message: string;
};

export type DispatchType = {
	email: string;
	password: string;
};

export const authLogin = createAsyncThunk('authFetch', async () => {
	const response = await userInfo();
	return response;
});

export const loginSlice = createSlice({
	name: 'login',
	initialState: {
		nickname: 'initialValue',
		userType: 'initialValue',
		message: 'initialValue',
	},
	reducers: {},
	extraReducers: {
		[authLogin.fulfilled.type]: (state, action) => {
			state.nickname = action.payload?.data?.nickname;
			state.userType = action.payload?.data?.user_type;
			state.message = action.payload?.status?.message;
		},
		[authLogin.rejected.type]: (state, action) => {
			state.nickname = 'initialValue';
			state.userType = 'initialValue';
		},
	},
});

export default loginSlice.reducer;
