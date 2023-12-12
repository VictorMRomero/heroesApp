import { Link } from "react-router-dom";


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImage = `/assets/heroes/${id}.jpg`;
    const characterByHero = (<p>{characters}</p>);

    return (
        
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    
                    <div className="col-4 ">
                        <img src={heroImage} alt={superhero} className="card-img" />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && (characterByHero)
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>Mas Info</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}