import memojiImage from '@/assets/images/logo6.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/fondo18.jpg';

export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0">

    <div 
      className="absolute inset-0 -z-30 opacity-15" 
      style={{ 
        backgroundImage: `url(${grainImage.src})`, 
      }} 
    ></div>

    <div className="size-[620px] hero-ring"></div>

    <div className="container">
      <div className="flex flex-col items-center" >
        <Image 
          src={memojiImage} 
          className='size-[300px]' 
          alt="J&A Soluciones Integradas" 
        />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-full">
          <div className="bg-green-500 size-2.5 rounded-full" ></div>
          <div className="text-sm font-medium" >
            Disponible para nuevos proyectos
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wider">
          Building Excepcional User Experiences
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quae laboriosam magni sapiente suscipit ipsam consequuntur! Fugiat ab neque, commodi at quia quod inventore natus animi quis aliquam eum nulla! 
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full">
          <span className="font-semibold" >Explora nuestro trabajo</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-full">
          <span>👋</span>
          <span className="font-semibold" >Let's Connect</span>
        </button>
      </div>
    </div>
  </div>
  );
};
