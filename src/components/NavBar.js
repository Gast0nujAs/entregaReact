function NavBar(){
    return (
        <div>

            
                <nav className="navbar" role="navigation" aria-label="dropdown navigation">
                    <div>
                        <h1 className="title">Exprensive Drinks</h1>
                    </div>
                    <div class="navbar-end navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Drinks
                        </a>

                        <div className="navbar-dropdown" id="dropClass">
                            <a class="navbar-item">
                                Bebida
                            </a>
                            <a className="navbar-item">
                            Bebida
                            </a>
                            <a className="navbar-item">
                            Bebida
                            </a>
                            
                        </div>
                    </div>
                </nav>

        </div>
                


    )
}

export default NavBar;