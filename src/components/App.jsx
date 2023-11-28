import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix';

import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from './Api';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.search.value;

    setQuery(newQuery);
    setPage(1);
    setIsLoading(true);
    setImages([]);

    fetchGallery(newQuery, 1);
  };

  const onNextPage = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);

    fetchGallery(query, page + 1);
  };

  const onClickImage = url => {
    setShowModal(true);
    setLargeImageURL(url);
  };

  const onModalClose = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  const fetchGallery = (query, page) => {
    fetchImages(query, page)
      .then(response => {
        setImages(prevImages => [...prevImages, ...response]);
        setShowBtn(response.length === 12);

        if (response.length === 0) {
          Notify.failure('No matches found!');
        }
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (query !== '') {
      fetchGallery(query, page);
    }
  }, [query, page]);

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} onClickImage={onClickImage} />
      {isLoading && <Loader />}
      {showBtn && <Button onNextPage={onNextPage} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onModalClose={onModalClose} />
      )}
    </div>
  );
};

export { App };
