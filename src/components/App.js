import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import ListComponentsItems from "./ListComponentsItems";
import imgAvatar from "../img/img_avatar.png"

function App() {
    return (
        <div>
            <div className="hero is-info">
                <section className="hero-body">
                    <NavBar/>
                    <CartWidget/>
                    

                </section>
            </div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ListComponentsItems  img={imgAvatar} greeting={"Avatar"}/>
                        </div>
                        <div className="column is-4">
                            <ListComponentsItems  img={imgAvatar} greeting={"Avatar"}/>
                        </div>
                        <div className="column is-4">
                            <ListComponentsItems  img={imgAvatar} greeting={"Avatar"}/> 
                        </div>
                    </div>
                 </section>


            </div>
            
            
        </div>
        
    )
};

export default App;