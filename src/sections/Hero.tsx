import memojiImage from '@/assets/images/logoJA__sinFondo.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
  <div className='py-32' >
    <div className="container">
      <Image src={memojiImage} className='size-[300px]' alt="J&A Soluciones Integradas" />
      <div>
        <div></div>
        <div>Disponible para nuevos proyectos</div>
      </div>
      <h1>Building Excepcional User Experiences</h1>
      <p> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quae laboriosam magni sapiente suscipit ipsam consequuntur! Fugiat ab neque, commodi at quia quod inventore natus animi quis aliquam eum nulla! 
      </p>
      <div>
        <button>
          <span>Explora nuestro trabajo</span>
          <ArrowDown />
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
