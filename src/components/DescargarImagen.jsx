import React, { useState, useEffect } from 'react';

function DescargarImagen(props) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        async function fetchImage() {
            // Utilizamos la función fetch para obtener el contenido de la imagen en una respuesta del servidor
            const response = await fetch(props.imageUrl);

            // Obtenemos el contenido de la imagen como una imagen en formato Blob
            const blob = await response.blob();

            // Creamos una URL temporal para la imagen utilizando la función createObjectURL
            const imageUrl = URL.createObjectURL(blob);

            // Establecemos la URL temporal de la imagen en el estado del componente
            setImageUrl(imageUrl);
        }

        fetchImage();
    }, []);

    return (
        <a href={imageUrl} download={props.filename} className='btn btn-primary btn-sm'>&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>&nbsp;&nbsp;&nbsp;
        </a>


    );
}



export default DescargarImagen;