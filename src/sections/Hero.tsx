import memojiImage from '@/assets/images/logoJA__sinFondo.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
  <div className='py-32' >
    <div className="container">
      <div className="flex flex-col items-center" >
        <Image 
          src={memojiImage} 
          className='size-[300px]' 
          alt="J&A Soluciones Integradas" 
        />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-full">
          <div className="bg-green-500 size-2.5 rounded-full" ></div>
          <div className="text-sm font-medium" >Disponible para nuevos proyectos</div>
        </div>
      </div>
      <h1 className="font-serif text-3xl text-center mt-8 tracking-wider">
        Building Excepcional User Experiences
      </h1>
      <p className="mt-4 text-center text-white/60"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quae laboriosam magni sapiente suscipit ipsam consequuntur! Fugiat ab neque, commodi at quia quod inventore natus animi quis aliquam eum nulla! 
      </p>
      <div className="flex flex-col items-center mt-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full">
          <span className="font-semibold" >Explora nuestro trabajo</span>
          <ArrowDown className="size-4" />
        </button>
        <button>
          <span>👋</span>
          <span>Let's Connect</span>
        </button>
      </div>
    </div>
  </div>
  );
};
