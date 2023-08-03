import { Route, Routes } from "react-router-dom"
import { PokePage } from "../poke/pages/PokePage"
import { PokeDetailPage } from "../poke/pages/PokeDetailPage"
import { NavBar } from "../common/components/NavBar"


export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<PokePage />} />
                    <Route path="pokemon/:name" element={<PokeDetailPage />} />
                </Routes>
            </div>
        </>
    )
}