import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPokemon } from "../../common/services/PokeApiService";


export const PokeDetailPage = () => {
    const params = useParams();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        getPokemon(params.name, setPokemon);
        console.log(pokemon)
    }, [])

    return (
        <>
            {pokemon !== null ?
                <div className="container py-4 my-4 mx-auto d-flex flex-column">
                    <div className="header">
                        <div className="row r1">
                            <div className="col-md-9 abc">
                                <h1 className="text-uppercase text-primary">{pokemon.name}</h1>
                            </div>
                            <p className="text-right text-secondary">Pokemon #{pokemon.id}</p>
                        </div>
                    </div>
                    <div className="container-body mt-4">
                        <div className="row r3">
                            <div className="col-md-5 p-0 klo">
                                <span className="text-info">Pokemon Type</span>
                                <ul>
                                    {pokemon.types.map(type => (
                                        <li>{type.type.name}</li>
                                    ))}
                                </ul>
                                <p><span className="text-info">Height: </span>{pokemon.height} decimetres</p>
                                <p><span className="text-info">Weight: </span>{pokemon.weight} hectograms</p>
                                <span className="text-info">Stats</span>
                                <ul>
                                    {pokemon.stats.map(stat => (
                                        <li>{stat.stat.name}: {stat.base_stat}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-7">
                                <img src={pokemon.sprites.other.home.front_default} style={{ marginTop: "-200px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="footer d-flex flex-column mt-5">
                        <div className="row r4">
                            <div className="col-md-2 myt ">
                                <a type="button" href="/" className="btn btn-outline-info">
                                    Go back
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div></div>
            }
        </>
    )
}