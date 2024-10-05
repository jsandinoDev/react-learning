import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs( category );
    
    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>) // logic AND &&
            }
            

            <div className="card-grid">
                {images.map(( image ) => (  //images.map(({id, title}) -> destruct
                    <GifGridItem key={image.id} 
                        {...image}  // send all the propesties
                    />
                ))}
            </div>
        </>
    )
}
