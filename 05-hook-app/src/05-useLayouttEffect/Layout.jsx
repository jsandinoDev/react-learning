import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {

    const { counter, decrement, increment } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    const pokemon = {
        id: data?.id,
        name: data?.name,
        sprites: null,
    }
    return (
        <>

            <h1>Infomation of the Pokemon</h1>
            <hr />

            {isLoading ?
                <LoadingMessage /> :
                // <PokemonCard key={pokemon} />
                (
                <PokemonCard 
                    id = {data?.id} 
                    name={data?.name} 
                    sprites={[
                        data?.sprites.front_default,
                        data?.sprites.front_shiny,
                        data?.sprites.back_default,
                        data?.sprites.back_shiny,
                    ]}/>)
            }

            {/* <pre> {JSON.stringify(data, null, 2)} </pre> */}


            <button className="btn btn-primary mt-2"
                onClick={
                    () => counter > 1 ? decrement() : null
                }
            >
                Anterior
            </button>
            <button className="btn btn-primary mt-2"
                onClick={() => increment()}
            >Siguiente</button>
        </>
    )
}
