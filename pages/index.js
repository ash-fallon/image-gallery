import { useState, useEffect } from 'react';

import Card from '../components/Card';

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=27928358-75f1204202f348b034a987023&q=${searchTerm}&image_type=photo&pretty=true`,
    )
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  return (
    <div className='container mx-auto h-screen'>
      <div className='grid grid-cols-3 gap-4 h-screen'>
        {images.map(image => {
          return <Card key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
