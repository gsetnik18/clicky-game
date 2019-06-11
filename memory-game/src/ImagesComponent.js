import React from 'react';

const ImagesComponent = ({images, onHandleFunction})=>{

  const renderPictures = images.map((image) => {
    return <img onClick={()=>onHandleFunction(image.id)} key={image.id} id={image.id} alt={image.name} src={image.img}></img>
  })
return(
  <div>{renderPictures}</div>
)


    
}
export default ImagesComponent;