import grainImage from '@/assets/images/fondo10.jpg';
import { PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

export const CardAbout = ({ 
    className, 
    children, 
}: PropsWithChildren<{
    className?: string
}>) => {
    return (
        <div
            className={twMerge("bg-gray-900 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6", className)} /* p-8 para que la imagen salga completa y con padding-bottom */
            >   
            <div
            className="absolute inset-0 -z-10 opacity-20 bg-cover bg-center"
            style={{
                backgroundImage: `url(${grainImage.src})`,
            }}
            ></div>
            {children}
        </div>
    );
};