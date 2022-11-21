// import { Fragment } from "react"
const newMessage = {
    message: 'Hola Mundo',
    title: 'Fernando'
};

const getResul =(a: number, b: number) => {
    return a + b;
}

export const FirstApp = () => {
    
    return (
        <>
            <h1>{(getResul(4, 7))}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>Soy un Subtitulo</p>
        </>
    )
}
