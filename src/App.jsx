import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/auth";
import {
  CreateDishPage,
  DishPage,
  EditDishPage,
  HomePage,
  LoginPage,
  RegisterPage,
} from "./pages";
import { NotFound } from "./pages/404";

export function App() {
  const authContext = useAuth();

  return authContext && authContext.user ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} errorElement={<NotFound />} />
        <Route
          path="/dish/:dishId"
          element={<DishPage />}
          errorElement={<NotFound />}
        />
        {authContext.user.admin == true && (
          <>
            <Route
              path="/dish/:dishId/edit"
              element={<EditDishPage />}
              errorElement={<NotFound />}
            />
            <Route
              path="/new"
              element={<CreateDishPage />}
              errorElement={<NotFound />}
            />
          </>
        )}

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
