import { useState } from 'react';

const SearchBar = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmitHandler} className='w-full max-w-sm'>
        <div className='flex items-center border-b-2 border-teal-500 py-2'>
          <input
            type='text'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            placeholder='Search Images here...'
            onChange={e => setText(e.target.value)}
          />
          <button
            className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 mr-2 text-sm border-4 
            text-white py-1 px-2 rounded hover:transition ease-in-out hover:-translate-y-1 duration-300 active:-translate-y-0'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
