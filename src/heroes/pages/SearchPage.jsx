import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from 'query-string';
import { getHeroByName } from "../helpers";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const {q = ''} = queryString.parse( location.search );

    const heroes = getHeroByName(q);

   

   const showSearch = (heroes.length === 0 && q.length > 1) ;
   

    const { searchText, onInputChange} = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        

        navigate(`?q=${ searchText}`)
        
    };

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit }>
                        <input 
                        type="text"
                        placeholder="Search a hero"
                        className="form-control"
                        name="searchText"
                        autoComplete="off" 
                        value={ searchText}
                        onChange={ onInputChange}/>
                    </form>
                    <button className="btn btn-outline-primary mt-2" onClick={ onSearchSubmit }>Search</button>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary" style={{display: q !== '' ? "none" : ''}}>Search a hero</div>   
                    
                    <div className="alert alert-danger" style={{display: showSearch ? '' : "none"}}>There is no results with <b>{q}</b></div>     
                    
                    
                    {
                        heroes.map((hero) => (

                        <HeroCard 
                            key = {hero.id}
                            Hawkeye
                            Alter ego: Clinton Francis Barton
                            {...hero}
                        />
                            

                        ))
                    }
                    


                </div>
            </div>
        </>
    )
}