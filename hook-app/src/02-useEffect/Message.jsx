import { useEffect } from "react"

export const Message = () => {


    useEffect(() => {
        
        const onMousemove = ({x,y}) => {
            const coords = {x,y};
            console.log(coords)
        }

        window.addEventListener ( 'mousemove', onMousemove)

      return () => {
        window.removeEventListener ( 'mousemove', onMousemove)
      }
    }, [])
    
    return (

        <>
            <h3>Usuario ya existe</h3>
        </>

    )
}
