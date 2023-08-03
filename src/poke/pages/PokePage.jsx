import { useEffect, useState } from "react"
import { getPokemons } from "../../common/services/PokeApiService"

export const PokePage = () => {

    const [pokemonsData, setPokemonsData] = useState({ next: '', data: [] });

    useEffect(() => {
        getPokemons(setPokemonsData, null);
    }, [])

    const handlePrev = async() => {
        await getPokemons(setPokemonsData, pokemonsData.prev);
    }

    const handleNext = async () => {
        await getPokemons(setPokemonsData, pokemonsData.next);
    }

    return (
        <>
            {pokemonsData.data !== null ?
                <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
                    {pokemonsData.data.map(pokemon => (
                        <div className="col" key={pokemon.name}>
                            <div className="card" style={{ border: "3px solid #ccc" }}>
                                <img src={pokemon.img} className="card-img-top"
                                    alt={pokemon.name} />
                                <div className="card-body text-center">
                                    <h3 className="card-title text-uppercase text-info">{pokemon.name}</h3>
                                    <h5>#{pokemon.id}</h5>
                                    <a type="button" href={`/pokemon/${pokemon.name}`} className="btn btn-primary btn-lg mt-3 text-center">Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div>
                    <h1>NO POKEMONS FOUND!</h1>
                </div>
            }
            <div className="text-center m-4">
                {pokemonsData.data.prev === null ? <></> : <button type="button" className="btn btn-lg btn-outline-success m-3" onClick={handlePrev}>Prev</button>}
                <button type="button" className="btn btn-lg btn-outline-success m-3" onClick={handleNext}>Next</button>
            </div>
        </>
    )
}