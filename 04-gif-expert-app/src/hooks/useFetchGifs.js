import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();

    }, []) // The [] means that the component only runs the effect the frist time 
    // that the component is being create

    return {
        images: images,
        isLoading: isLoading
    }
}


