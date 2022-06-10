import Image from 'next/image';

const Card = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className='w-80 h-[30rem] rounded overflow-hidden shadow-xl md:w-[22rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl'>
      <div className='h-[55%] relative'>
        <Image
          src={image.webformatURL}
          alt=''
          layout='fill'
          objectFit='cover'
        ></Image>
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-0'>
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-1'
            >
              {`#${tag}`}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
