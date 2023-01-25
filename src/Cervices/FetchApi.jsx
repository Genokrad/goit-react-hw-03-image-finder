import axios from 'axios';

const API_KEY = '32400124-6081fea5d64b147e664dca944';
// ?key=32400124-6081fea5d64b147e664dca944&q=yellow+flowers&image_type=photo

// axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const moreImages = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return moreImages.data;
};
