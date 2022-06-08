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
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, []);

  return <Card />;
};

export default HomePage;
