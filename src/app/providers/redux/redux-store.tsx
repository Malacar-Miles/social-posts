import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "entities/post";
import { Provider } from "react-redux";
import { jsonPlaceholderApi } from "shared/api";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)
});

export const ReduxStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
