import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { Navbar } from "../UI/components/NavBar";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";
import { PublicRoute } from "../heroes/routes/PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="login/*" element={
                    <PublicRoute>
                        {/* <LoginPage /> */}
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                }
                />
                {/* <Route path="/login" element={<LoginPage />} /> */}

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

                {/* <Route path="/*" element={ } /> */}

            </Routes>


        </>
    )
}
