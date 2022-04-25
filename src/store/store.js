import { Store } from "@mui/icons-material";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Ici on a pas besoin de mettre combineReducer
    counter: counterReducer,
    user: userReducer,
  },
  // Middleware: Appel implicite du "ApplyMiddleware" et de "Compose"
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()], //Les autres middlewares
  // Ajout des devtools simplifié
  devTools: process.env.NODE_ENV === "development",
});

export default store;
