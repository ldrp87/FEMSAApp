import { NavLink } from 'react-router-dom';


export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink  className="nav-item nav-link"  to="/" >
                        Pokemons
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}