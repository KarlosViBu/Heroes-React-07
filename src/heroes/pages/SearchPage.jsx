import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  // console.log({ heroes });

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = ( event ) => {
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;
    // console.log({ searchText });

    navigate(`?q=${ searchText }`);
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <form onSubmit={ onSearchSubmit }>
            <input 
              className="form-control"
              type="text" 
              placeholder="Which hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange= { onInputChange }
            />

            <button className="btn btn-outline-success mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>

          {/* {
            ( q === '' )
            ? <div className="alert alert-success"> Serach a Hero </div>
            : ( heroes.length === 0 ) && <div className="alert alert-danger"> No hero with <b>{ q }</b> </div>
          } */}
          
          {/* <div className="alert alert-success" style={{ display: q !== '' ? 'none' : '' }}>
             Serach a Hero 
          </div>

          <div className="alert alert-danger" style={{ display: 'none'}}>
             No hero with <b>{ q }</b> 
          </div>
           */}

          <div className="alert alert-success animate__animated animate__fadeIn" 
            style={{ display: showSearch ? '' : 'none' }}>
             Serach a Hero 
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" 
            style={{ display: showError ? '' : 'none'}}>
             No hero with <b>{ q }</b> 
          </div>


          {
            heroes.map( hero => (
              <HeroCard key= { hero.id } { ...hero } />
            ))
          }

        </div>
      </div>

    </>
  )
}
