import { configureStore } from "@reduxjs/toolkit";
import enrolledCoursesSlice from "./features/enrolledCourses/enrolledCoursesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      courses: enrolledCoursesSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
