import { createClient } from 'contentful'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

export async function getStaticProps() {

  const client = createClient({
    space: 'gxsrlcr0bnli',
    accessToken: 'qH9hisCwSZAg_ABN-AzjTHGu42VGiSWwtmXdhce7LnI',
  })

  const res = await client.getEntries({ content_type: "product" })

  return {
    props: {
      product: res.items,
    },
    revalidate: 1
  }
}

export default function Recipes({ product }) {

  useEffect(() => {
    axios.get('https://mironshohapps.herokuapp.com/product/')
      .then(res => console.log('res= ',res.data));
  }, [])
  

  return (
    <div className="recipe-list">

      <section class="home" id="home">

        <div class="slide-container active">
          <div class="slide">
            <div class="content">
              <span>nike red shoes</span>
              <h3>nike metcon shoes</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
              {/* <a href="#" class="btn">add to cart</a> */}
            </div>
            <div class="image">
              <img src="images/home-shoe-1.png" class="shoe" alt="" />
              <img src="images/home-text-1.png" class="text" alt="" />
            </div>
          </div>
        </div>

        <div class="slide-container">
          <div class="slide">
            <div class="content">
              <span>nike blue shoes</span>
              <h3>nike metcon shoes</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
              <a href="#" class="btn">add to cart</a>
            </div>
            <div class="image">
              <img src="images/home-shoe-2.png" class="shoe" alt="" />
              <img src="images/home-text-2.png" class="text" alt="" />
            </div>
          </div>
        </div>

        <div class="slide-container">
          <div class="slide">
            <div class="content">
              <span>nike yellow shoes</span>
              <h3>nike metcon shoes</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
              <a href="#" class="btn">add to cart</a>
            </div>
            <div class="image">
              <img src="images/home-shoe-3.png" class="shoe" alt="" />
              <img src="images/home-text-3.png" class="text" alt="" />
            </div>
          </div>
        </div>

        <div id="prev" class="fas fa-chevron-left" onclick="prev()"></div>
        <div id="next" class="fas fa-chevron-right" onclick="next()"></div>

      </section>

      <section class="service">

        <div class="box-container">

          <div class="box">
            <i class="fas fa-shipping-fast"></i>
            <h3>fast delivery</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
          </div>

          <div class="box">
            <i class="fas fa-undo"></i>
            <h3>10 days replacements</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
          </div>

          <div class="box">
            <i class="fas fa-headset"></i>
            <h3>24 x 7 support</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
          </div>

        </div>

      </section>

      <section class="products" id="products">

        <h1 class="heading"> latest <span>products</span> </h1>

        <div class="box-container">

          {product.map(item => (
            <ProductCard key={item.sys.id} product={item} />
          ))}

        </div>

      </section>

      <section class="featured" id="featured">

        <h1 class="heading"> <span>featured</span> products </h1>

        <div class="row">
          <div class="image-container">
            <div class="small-image">
              <img src="images/f-img-1.1.png" class="featured-image-1" alt="" />
              <img src="images/f-img-1.2.png" class="featured-image-1" alt="" />
              <img src="images/f-img-1.3.png" class="featured-image-1" alt="" />
              <img src="images/f-img-1.4.png" class="featured-image-1" alt="" />
            </div>
            <div class="big-image">
              <img src="images/f-img-1.1.png" class="big-image-1" alt="" />
            </div>
          </div>
          <div class="content">
            <h3>new nike airmax shoes</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis praesentium odit voluptas illum iure libero quis fuga commodi. Autem.</p>
            <div class="price">$80.99 <span>$120.99</span></div>
            <a href="#" class="btn">add to cart</a>
          </div>
        </div>

        <div class="row">
          <div class="image-container">
            <div class="small-image">
              <img src="images/f-img-2.1.png" class="featured-image-2" alt="" />
              <img src="images/f-img-2.2.png" class="featured-image-2" alt="" />
              <img src="images/f-img-2.3.png" class="featured-image-2" alt="" />
              <img src="images/f-img-2.4.png" class="featured-image-2" alt="" />
            </div>
            <div class="big-image">
              <img src="images/f-img-2.1.png" class="big-image-2" alt="" />
            </div>
          </div>
          <div class="content">
            <h3>new nike airmax shoes</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis praesentium odit voluptas illum iure libero quis fuga commodi. Autem.</p>
            <div class="price">$80.99 <span>$120.99</span></div>
            <a href="#" class="btn">add to cart</a>
          </div>
        </div>

        <div class="row">
          <div class="image-container">
            <div class="small-image">
              <img src="images/f-img-3.1.png" class="featured-image-3" alt="" />
              <img src="images/f-img-3.2.png" class="featured-image-3" alt="" />
              <img src="images/f-img-3.3.png" class="featured-image-3" alt="" />
              <img src="images/f-img-3.4.png" class="featured-image-3" alt="" />
            </div>
            <div class="big-image">
              <img src="images/f-img-3.1.png" class="big-image-3" alt="" />
            </div>
          </div>
          <div class="content">
            <h3>new nike airmax shoes</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis praesentium odit voluptas illum iure libero quis fuga commodi. Autem.</p>
            <div class="price">$80.99 <span>$120.99</span></div>
            <a href="#" class="btn">add to cart</a>
          </div>
        </div>

      </section>


      <section class="review" id="review">

        <h1 class="heading"> customer's <span>review</span> </h1>

        <div class="box-container">

          <div class="box">
            <img src="images/pic1.png" alt="" />
            <h3>john deo</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias possimus quisquam rerum temporibus ipsum voluptate accusamus, unde ab asperiores? Exercitationem, unde rem.</p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>

          <div class="box">
            <img src="images/pic2.png" alt="" />
            <h3>john deo</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias possimus quisquam rerum temporibus ipsum voluptate accusamus, unde ab asperiores? Exercitationem, unde rem.</p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>

          <div class="box">
            <img src="images/pic3.png" alt="" />
            <h3>john deo</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat, quos eum.Laborum aut a consequatur ducimus, molestias possimus quisquam rerum temporibus ipsum voluptate accusamus, unde ab asperiores?Exercitationem, unde rem.</p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

        </div>

      </section>


      <section class="newsletter">

        <div class="content">
          <h3>monthly newsletter</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ullam veniam at itaque culpa hic corporis saepe dicta doloremque nihil.</p>
          <form action="">
            <input type="email" placeholder="enter your email" class="box" />
            <input type="submit" value="send" class="btn" />
          </form>
        </div>

      </section>


    </div>
  )
}

// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// }

// window.onscroll = () =>{
//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');
// }

// let slides = document.querySelectorAll('.slide-container');
// let index = 0;

// function next(){
//   slides[index].classList.remove('active');
//   index = (index + 1) % slides.length;
//   slides[index].classList.add('active');
// }

// function prev(){
//   slides[index].classList.remove('active');
//   index = (index - 1 + slides.length) % slides.length;
//   slides[index].classList.add('active');
// }

// document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
//   image_1.addEventListener('click', () =>{
//     var src = image_1.getAttribute('src');
//     document.querySelector('.big-image-1').src = src;
//   });
// });

// document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
//   image_2.addEventListener('click', () =>{
//     var src = image_2.getAttribute('src');
//     document.querySelector('.big-image-2').src = src;
//   });
// });

// document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
//   image_3.addEventListener('click', () =>{
//     var src = image_3.getAttribute('src');
//     document.querySelector('.big-image-3').src = src;
//   });
// });

