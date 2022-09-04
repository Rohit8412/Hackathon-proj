import React,{useState,useEffect} from 'react';
import '../Styles/Discussions.css';
import NewsCard from './newsCard';
import CommentBox from './Commentbox';
const API_KEY='31c57fa11a99402ca9ff283d5606aba9';

function Discussions (){
  const [data, setdata] = useState({articles:[]});
  const news= async ()=>{
    let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`);
  setdata(await response.json());
  }
  console.log(data.articles);
  useEffect(() => {
    news();
  }, []);
  return (
  <CommentBox/>
  );
}

export default Discussions;
