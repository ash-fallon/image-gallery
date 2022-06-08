import Image from 'next/image';

const Card = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className='max-w-sm h-[50vh] rounded overflow-hidden shadow-xl'>
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
