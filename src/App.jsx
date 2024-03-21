import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Restaurant from "./pages/Restaurant";
import Checkout from "./pages/Checkout";
import User from "./pages/dashboard/User";
import Admin from "./pages/dashboard/Admin";
import Rider from "./pages/dashboard/Rider";
import RestaurantDash from "./pages/dashboard/Restaurant";
import SpecialLayout from "./components/pageComponents/dashboard/SpecialLayout";
import PersistLogin from "./components/hook/PersistLogin";
import RequireAuth from "./components/hook/RequireAuth";
import Unauthorized from "./components/Unauthorized";

function App() {
  const ROLES = {
    User: "user",
    Admin: "admin",
    Rider: "rider",
    Restaurant: "restaurant",
  };

  return (
    <>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/restaurant/*" element={<Restaurant />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* user routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/dashboard/user" element={<User />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route
              element={
                <RequireAuth
                  allowedRoles={[
                    ROLES.Admin,
                    ROLES.User,
                    ROLES.Rider,
                    ROLES.Restaurant,
                  ]}
                />
              }
            >
              <Route path="unauthorized" element={<Unauthorized />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
        <Route element={<PersistLogin />}>
          <Route path="protected/" element={<SpecialLayout />}>
            {/* admin routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="admin-dashboard" element={<Admin />} />
            </Route>
            {/* rider routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.Rider]} />}>
              <Route path="rider-dashboard" element={<Rider />} />
            </Route>
            {/* restaurant routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.Restaurant]} />}>
              <Route
                path="restaurant-dashboard"
                element={<RestaurantDash />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
