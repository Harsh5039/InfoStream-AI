import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";
import data from "../data/data.json"

const NewsBoard = ({category}) => {

    const [articles,setArticles]=useState(data.articles);

   
    
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title ={news.title} desciption ={news.desciption} src={news.urlToImage} url ={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
