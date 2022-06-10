import { useState, useEffect } from 'react';

import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=27928358-75f1204202f348b034a987023&q=${searchTerm}&image_type=photo&pretty=true&per_page=200`,
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
      <SearchBar
        searchText={text => {
          setSearchTerm(text);
        }}
      />
      {isLoading && (
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
      )}
      {!isLoading && (
        <div className='grid grid-cols-1 gap-y-12 place-items-center h-screen md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {images.map(image => {
            return <Card key={image.id} image={image} />;
          })}
        </div>
      )}
      {!isLoading && images.length === 0 && (
        <h1 className='text-6xl text-center mx-auto mt-32'>
          No images found...
        </h1>
      )}
    </div>
  );
};

export default HomePage;
