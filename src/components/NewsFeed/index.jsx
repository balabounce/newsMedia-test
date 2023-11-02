import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews } from "../../app/reducers/newsSlice";
import NewsItem from "../NewsItem";

const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

const NewsMedia = () => {
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews(skip));
  }, [dispatch, skip]);

  const handleScroll = useDebounce(() => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (Math.abs(scrollTop + clientHeight - scrollHeight) < 1) {
        setSkip(skip => skip + 10);
      }
  }, 300);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {news.map(item => (
        <NewsItem key={item.id} news={item} />
      ))}
    </div>
  )
}

export default NewsMedia;
