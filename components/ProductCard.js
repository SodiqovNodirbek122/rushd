import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const { title, code, price, image } = product.fields

  return (
    <div class="box">
      <div class="icons">
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-share"></a>
        <a href="#" class="fas fa-eye"></a>
      </div>
      <Image 
          src={'https:' + image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />
      <div class="content">
        <h3>{title}</h3>
        <div class="price">{price} <span>{code}</span></div>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <a href="#" class="btn">add to cart</a>
      </div>
    </div>

  )
}
