import image from '../assets/images.jpg'
const NewsItem = ({ title, desciption , src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 flex " style={{maxWidth:"345px", display:"flex", alignContent:"center"}}>
  <img src={src?src:image}  style={{height:"200px", width:"300px", alignItems: "center"}} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{desciption?desciption.slice(0,90):""}</p>

    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
