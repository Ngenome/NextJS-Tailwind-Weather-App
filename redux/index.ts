import { configureStore } from "@reduxjs/toolkit";
import forecastReducer from "./features";
import statusReducer from "./features/status";
import locationReducer from "./features/location";
import activeTabReducer from "./features/tabs";

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    status: statusReducer,
    location: locationReducer,
    activeTab: activeTabReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
