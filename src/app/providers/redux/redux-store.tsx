import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "entities/post";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
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
