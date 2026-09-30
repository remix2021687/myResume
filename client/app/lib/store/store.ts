import { configureStore } from "@reduxjs/toolkit";

export const store = () => {
	return configureStore({
		reducer: {
			_tmp: (state = null) => state,
		},
	});
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
