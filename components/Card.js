import Image from 'next/image';

const Card = () => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <div className='h-96 relative'>
        <Image
          src='https://source.unsplash.com/random'
          alt=''
          layout='fill'
          objectFit='cover'
        ></Image>
      </div>
    </div>
  );
};

export default Card;
