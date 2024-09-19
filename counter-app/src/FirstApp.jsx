// const newMessage = {
//     message: 'Hola Mundo',
//     title:'Josue'
// }

// const getResult = (a,b) => {
//     return a + b;
// }

import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => { // this is a fragment <>
    return (
        <> 
        <h1>{ title }</h1>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p>{ subTitle}</p>
        </>
    )
}

FirstApp.prototypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}


FirstApp.defaultProps = {
    name: 'Josue',
    title: 'No hay titulo',
    subTitle: 'No hay'

}