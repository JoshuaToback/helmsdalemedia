import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Marketplaces from '../components/Marketplaces'

import myCityPoster from "../images/myCityPoster.jpeg";

import Amazon from "../images/Markets/Amazon.png";
import Barnes from "../images/Markets/Barnes.png";
import BookSoup from "../images/Markets/BookSoup.png";
import Vromans from "../images/Markets/Vromans.png";
import Walmart from "../images/Markets/Walmart.png";

import '../styles/publish.css'

const markets = [
  {title: "Amazon", src: Amazon, link: 'https://www.amazon.com/My-City-View-Stephen-Toback/dp/0578294745'},
  {title: "Barnes and Noble", src: Barnes, link: 'https://www.barnesandnoble.com/w/my-city-view-stephen-toback/1141464659?ean=9780578294742'},
  {title: "BookSoup", src: BookSoup, link: 'https://www.booksoup.com/book/9780578294742'},
  {title: "Vromans", src: Vromans, link: 'https://www.vromansbookstore.com/book/9780578294742'},
  {title: "Walmart", src: Walmart, link: 'https://www.walmart.com/ip/My-City-View-Hardcover-9780578294742/276450545'},
]


function publishing() {
  return (
    <Container>
      <Row className='publishRow'>
        <div className='bookInfo'>
          <h2>Imagination.</h2>
          <p>If the view outside your window is a bit ordinary, use your imagination to make it extraordinary! “My City View” tells the story of one young person’s journey to transform the boring and drab view outside their window into many wondrous places full of lots of little details to explore. From a circus to a rocket ship, you’ll spend a wonderful time exploring all the different scenes. Challenge your child to use their own imagination to dream up even more fantastic locations outside their own window!</p>
          <h3><CustomLink to="/autograph"><strong>Click here for information on how to order an autographed copy.</strong></CustomLink></h3>
          <img src={myCityPoster} alt="My City View Poster" />
        </div>  

        <div className='marketplaces'>
          {markets.map((marketProp, index) => (
            <Marketplaces
              key={index}
              src={marketProp.src}
              link={marketProp.link}
            />
          ))}
        </div>
      </Row>
    </Container>
  )
}

export default publishing

function CustomLink({ to, children, ...props }) {
  return (
      <li>
      <Link to = {to} {...props}>
      { children }
      </Link>
      </li>
  )
}
