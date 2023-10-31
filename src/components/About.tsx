import React, { CSSProperties } from 'react';
import cvImage from './cv.jpg';

export const About = () => {
    const imageStyle: CSSProperties = {
        width: '220px',
        height: '160px',
        position: 'absolute',
        borderRadius: '16px',
        top: '165px', // Modification de la valeur top pour déplacer l'image de 40 pixels vers le bas
        right: '70px'
    };
    return (
        <section className="relative text-center p-20">
            <img src={cvImage} alt="CV" style={imageStyle} />
            <h1 className="bg-blue-700 text-white py-5 px-10 rounded text-center">HNACHI LAHMAMI</h1>
            <div className="info bg-gray-200 p-5 rounded mt-5">
                <ul>
                    <li><strong>Âge:</strong> 21</li>
                    <li><strong>Email:</strong> LAHMAMIhnachi2003@gmail.com</li>
                    <li><strong>Téléphone:</strong> 0655169473</li>
                    <li><strong>Adresse:</strong> DR NGUAR SIDI AISSA SOUK SEBT AZROU</li>
                    <li><strong>Date de naissance:</strong> 17–10–2002</li>
                </ul>
            </div>
        </section>
    );
}



