function ListComponentsItems({greeting, img}){

    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="img-avatar"/>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">{greeting}</h3>
                     
                </div>
            </div>      


        </div>
    )

};
export default ListComponentsItems;