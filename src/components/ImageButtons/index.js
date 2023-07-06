import './index.css'

const ImageButtons = props => {
  const {eachObj, compareTumbAndMain} = props
  const {id, thumbnailUrl} = eachObj
  const onThumbnailClick = () => {
    compareTumbAndMain(id)
  }
  return (
    <li>
      <button className="image-button" type="button" onClick={onThumbnailClick}>
        <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageButtons
