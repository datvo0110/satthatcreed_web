import React from 'react'
import withGA from "next-ga";
import Router from "next/router";
import MessengerCustomerChat from 'react-messenger-customer-chat';
// import {Carousel} from 'react-responsive-carousel';
import Link from 'next/link'
// import Slider from "react-slick";
// import Lightbox from 'react-images';
import Gallery from 'react-grid-gallery';

import Head from '../components/head'
import Nav from '../components/nav'
import indexStyles from './index.scss'

// import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const DESCRIPTION = 'Lấy cảm hứng từ những người phải ẩn đi danh tính và thân phận thật hay như những con người bình thường vô danh. ' +
  ' Những chiếc áo khoác Raven biến chúng ta thành `"tín đồ" của một suy nghĩ phá cách, một thứ có thể tạo ra 1 mối liên kết bí ẩn giữa những con người kỳ lạ nhưng khác biệt.' +
  'We are Satthat!'

const head =
  <Head title="Satthatcreed"/>
const navBar = <>
  <div className="navigation-bar ">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="col-md-6 col-xs-12">
        <img className="logo" src="/static/logo.png" alt="logo"/>
      </div>
      <div className="row col-md-6 col-xs-12 justify-content-right align-items-center">
        <div className="d-flex col-md-6 col-xs-12 justify-content-end align-items-center">
          <h4 className="slogan "><p className="hide"> Hide identities </p> show characteristics
          </h4>
        </div>
        <div className="d-flex social col-md-6 col-xs-12 justify-content-start align-items-center">
          <a href="https://www.facebook.com/Satthatcreedcom-361976391058470/?modal=admin_todo_tour"
             className="" target="_blank">
            <img
              src="/static/facebook-icon.png"
              alt="" className="img"/>
          </a>

          <a href="https://t.me/satthatcreed" className="" target="_blank">
            <img
              src="https://lh3.googleusercontent.com/u1DT1-_6FLTqldVf9fplZoMQ2leaP-Szgej3AuGXOjmUbaTbWWu8OxURE3QtmEgxam20R7yr3Q=w128-h128-e365"
              alt="" className="img"/>
          </a>
        </div>
      </div>
    </div>
    { /*language=SCSS*/}
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }

      .navigation-bar {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        //padding-top: 10px;
        //padding-bottom: 10px;
        //padding-left:80px;
        //padding-right: 80px;
        position: fixed;
        z-index: 100;
      }

      .slogan {
        color: white;
        width: 200px;
        font-size: 23px;
        font-weight: 500;
        font-style: italic;
        text-shadow: 2px 1px 3px rgba(0, 0, 0, 0.5);
        color: rgba(255, 255, 255, 0.8);
        margin-left: 15px;
      }

      .hide {
        color: rgba(0, 0, 0, 0.6);
        text-shadow: 2px 1px 3px rgba(255, 255, 255, 0.2);
        margin-bottom: 0px;
        margin-top: 10px;
      }

      .hide::before {
        content: "\\201C";
      }

      .slogan::after {
        content: "\\201D";
      }

      .logo {
        width: 140px;
      }
      .social{
        padding-bottom: 10px;
      }
      @media (max-width: 575.98px) {
        .slogan {
          font-size: 17px;
        }
        .logo {
          width: 80px;
        }

      }

      .img {
        margin-left: 10px;
        width: 40px;
      }
    `}</style>
  </div>
</>

const name = order => <>
  <div className="name col-md-6  col-xs-12 d-flex  justify-content-center align-items-center vh-1">
    <p className={order===1 ? 'text-left' : 'text-right'}><span>SAT</span><span>THAT</span><span
      className="red">CREED</span></p>
    { /*language=SCSS*/}
    <style jsx>{`
      .red {
        color: #97231C !important;
      }

      .name p span {
        display: block;
        font-weight: bold;
        font-size: 72px;
        line-height: 72px;
        color: #C4C4C4;
      }

      .name p {
        margin-bottom: 0px;
      }

      .name {
        padding-top: 30px;
        padding-bottom: 30px;
      }

    `}</style>
  </div>
</>

const background = order => <>
  <div className="background  position-absolute row d-none d-md-flex d-lg-flex ">
    {order===1 && <div className=" "/>}
    <div className=" grey"/>
    {order===2 && <div className=" "/>}
    { /*language=SCSS*/}
    <style jsx>{`

      .background {
        height: 100vh;
        width: 100vw;
        margin-right: 0px;
        margin-left: 0px;
      }

      .background div {
        width: 50vw;
          height: 100vh;
      }

      .grey {
        background-color: #C4C4C4;
      }
    `}</style>
  </div>
</>

const title = <>
  <h1 className="symbol ">RAVEN

    { /*language=SCSS*/}
    <style jsx>{`
      .symbol {

        color: white;
        margin-bottom: 3px;
      }

      @media (max-width: 575.98px) {
        .symbol {
          font-size: 30px;
          font-weight: 900;
        }
      }
    `}</style>
  </h1>

</>
const symbol = <div>
  <img className="symbol" src="/static/logo.png" alt="symbol" width="60"/>
  { /*language=SCSS*/}
  <style jsx>{`
    //.symbol {
    //width: 60px;
    //}
    //@media (max-width: 575.98px){
    //width: 30px;
    //}
  `}</style>
</div>
const year = <>
  <h4 className="year">Sản xuất 2019

    { /*language=SCSS*/}
    <style jsx>{`
      .year {
        color: white;
        margin-bottom: 20px;
        font-weight: 300;
        font-size: 19px;
      }

      @media (max-width: 575.98px) {
        .year {
          font-size: 13px;
        }
      }
    `}</style>
  </h4>
</>

const description = <>
  <h4 className="description">{DESCRIPTION}
    { /*language=SCSS*/}
    <style jsx>{`
      .description {
        padding-bottom: 10px;
        color: white;
        font-weight: 300;
        font-size: 21px;
        font-style: italic;
        word-spacing: .05em;
        line-height: 1.3;
        max-width: 600px;
      }

      @media (max-width: 575.98px) {
        .description {
          font-size: 17px;
        }
      }
    `}</style>
  </h4>

</>

const info = order => <>
  <div
    className={`d-flex info col-md-6 col-xs-12`}>
    <div
      className={`d-flex col wrapper justify-content-center  align-items-start`}>
      <div className="sub-image image d-md-none d-block">
        {subImage(order)}
      </div>
      <div className="title-symbol row ver-center">
        {title}
        {symbol}
      </div>
      <div className="">
      {year}
      {description}
      <div className="row justify-content-center  align-items-center">
        <p className={'price'}>890.000 VND</p>
        {button}
      </div>
      </div>

    </div>
    { /*language=SCSS*/}
    <style jsx>{`
 @media (max-width: 575.98px){
       .info {
        height: auto;
     }
    .info .wrapper{
    padding:  30px 30px 30px 30px;
    padding-left:  30px ;
    padding-right:  30px ;
     width: auto;
      height: auto;
     }

     }
     .info {
        //background-color:#C4C4C4;
        height: 100vh;
     }
     .info .wrapper{
     // padding-left: ${order===1 ? 250 : 0}px;
     // padding-right: ${order===2 ? 250 : 0}px;
      width: 400px;
     }
     .title-symbol{
     padding-left: 15px;
     }

@media  (max-width: 767.98px) {
       .wrapper{
     padding-left: 0px;
     padding-right: 0px;

     }
      .info {
        height: auto;
        background-color: #C4C4C4;
        margin-top: 20px;
        }

     }


     @media (min-width: 576px) and (max-width: 767.98px) {

       .wrapper{
    padding:  30px 30px 100px 30px;
     width: auto;
      height: auto;
     }}

      @media (min-width: 767.98px)  {
       .wrapper{
     width: 36vw;
     }
     }
.price{
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0px;
  margin-right: 20px;
  margin-left: 20px;
}
   `}</style>
  </div>
</>
const subImage = (order) => <>
  <div className="image-wrapper d-flex justify-content-center align-items-center">
    <img className="image" src={`/static/tshirt${order}.png`} alt="product-image"/>
    { /*language=SCSS*/}
    <style jsx>{`
      .image-wrapper {
        padding-bottom: 30px;
        padding-top: 30px;
      }

      .image {
        width: 80vw;
      }

      @media (min-width: 576px) and (max-width: 767.98px) {
        .image {
          width: 60vw;
        }
      }
    `}</style>
  </div>

</>

const image = (order) => <>
  <div className="image d-none d-md-block">
    <img src={`/static/tshirt${order}.png`} alt="product-image" width="400"/>
    { /*language=SCSS*/}
    <style jsx>{`
      .image {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    `}</style>
  </div>

</>

const button = <>
  <div className="button ">
    <a href="https://docs.google.com/forms/d/1PBQk_s0ZioDYSda8F9FE8I5D_Ov_3YaOdrxj59bMq8A/edit"
       className="" target="_blank">
      <span className="label">Mua ngay</span>
    </a>
    { /*language=SCSS*/}
    <style jsx>{`
      .button {
        width: 131px;
        height: 49px;
        background: #FFD774;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        text-align: center;
      }

      .label {
        font-size: 18px;
        color: rgba(0, 0, 0, 0.61);
        display: inline-block;
        vertical-align: middle;
        line-height: 49px;
        font-weight: 900;
      }
    `}</style>
  </div>

</>

//  function gallary(){
//    const settings = {
//      dots: true,
//      infinite: true,
//      speed: 500,
//      slidesToShow: 1,
//      slidesToScroll: 1
//    };
//   return (
//     <div>
//       <h2> Single Item</h2>
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }
const FBMessageChat =  <MessengerCustomerChat
  pageId="361976391058470"
  appId="151812912254813"
  loggedInGreeting="Satthatcreed hân hạnh được đón tiếp bạn"
  loggedOutGreeting="Satthatcreed hân hạnh được đón tiếp bạn"
  xfbml={true}
  version="3.2"
/>
function  carousel(){
  const imgSrcs = [];
  let i;
  for(i = 10; i > -1; i--){
    imgSrcs.push({
      src: `/static/carousel-images/${i}.jpg`,
      thumbnail: `/static/carousel-images/${i}.jpg`,
      thumbnailWidth: i < 7 ? 342 : 767,
      thumbnailHeight: 512,})
  }
  return <div className="carousel-wrapper container">
      <Gallery images={imgSrcs} enableImageSelection={false} margin={5} imageCountSeparator={" trên "}/>
    {/*<p className="carousel-title">Satthat</p>*/}
    {/*<Carousel autoPlay infiniteLoop statusFormatter={(current, total) => `${current} trên ${total}`}>*/}
      {/*{*/}
        {/*imgSrcs.map((imgSrc)=> <div className=" d-flex justify-content-center  align-items-center"><img src={imgSrc}  /></div>)*/}
      {/*}*/}
    {/*</Carousel>*/}
      {/*<Lightbox*/}
        {/*images={imgSrcs}*/}
        {/*// isOpen={this.state.lightboxIsOpen}*/}
        {/*// onClickPrev={this.gotoPrevLightboxImage}*/}
        {/*// onClickNext={this.gotoNextLightboxImage}*/}
        {/*onClose={()=>{}}*/}
      {/*/>*/}
    { /*language=SCSS*/}
    <style jsx>{`
      .carousel-wrapper{
        //background-image: url('/static/diagonal-squares.png');
        //padding-top: 70px;
        //padding-bottom: 300px;
         //background-color: #97231C;
      }
      .carousel-title{
      color: #ffffff;
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      }
    `}</style>
  </div>
}

const body = <>
  <div className="products d-flex col">
    <div className="product-wrapper d-flex justify-content-center  align-items-center">
      {background(1)}
      {image(1)}
      <div className=" container row">
        {name(1)}
        {info(1)}
      </div>
    </div>
    <div className="product-wrapper d-flex justify-content-center  align-items-center">
      {background(2)}
      {image(2)}
      <div className="container row">
        {info(2)}
        {name(2)}
      </div>
    </div>
    <div >
    {carousel()}
      {/*{gallary}*/}
    </div>
    {FBMessageChat}
    {/*{gallary()}*/}
    { /*language=SCSS*/}
    <style jsx>{`
      .products {
        //height: 1000px;
        // max-width: 1600px;
        padding-left: 0px;
        padding-right: 0px;
      }
      .product-wrapper {
        position: relative;
        height: 100vh;
      }

      @media (max-width: 800px) {
      .product-wrapper {
        height: auto;
      }
        .products {
          padding-top: 58px;
        }
      }
    `}</style>
  </div>
</>
const footer = <div className="footer-wrapper ">
  <div className="footer container ">
    <p className="contact ">Liên hệ</p>
    <p className="phone-number">Số điện thoại 1: 085 452 9936</p>
    <p className="phone-number">Số điện thoại 2: 083 205 0369</p>
    <p className="phone-number">Địa chỉ văn phòng: 75 Phương Mai, Quận Đống Đa, Tp. Hà Nội</p>
    <p className="phone-number">© 2019 - Bản quyền của satthatcreed.com</p>

  </div>
  { /*language=SCSS*/}
  <style jsx>{`
    .footer-wrapper {
      background-color: #30383f;
    }

    .footer {
      padding: 30px;
    }

    .contact {
      color: #e0e0e0;
      font-weight: 900;
      font-size: 15px;
      margin-right: 10px;
      margin-bottom: 0px;
      margin-top: 20px;
    }
    .phone-number {
      color: #e0e0e0;
      font-size: 13px;
      margin-right: 10px;
      margin-bottom: 0px;
      margin-top: 5px;
    }
  `}</style>
</div>

const Home = () => (
  <div>
    {head}
    {navBar}
    {body}
    {footer}

    { /*language=SCSS*/}
    <style jsx>{indexStyles}</style>
  </div>
)

export default withGA("UA-131737658-1", Router)(Home);