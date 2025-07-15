import { Routes, Route } from "react-router-dom"
import { Login, Home, ProtectedRoute, UserAuth, Configuracion } from '../index'
export function MyRoutes() {
    const { user } = UserAuth();
    return (
        // <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />} >
                <Route path="/" element={<Home />} />
                <Route path="/Configurar" element={<Configuracion />} />
            </Route>
        </Routes>
        // </BrowserRouter>
    )
}