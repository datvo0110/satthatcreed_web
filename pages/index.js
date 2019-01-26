import React from 'react'
import withGA from "next-ga";
import Router from "next/router";
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import indexStyles from './index.scss'

const DESCRIPTION = 'Lấy cảm hứng từ những người phải ẩn đi danh tính và thân phận thật hay như những con người bình thường vô danh. ' +
' Những chiếc áo khoác Raven biến chúng ta thành `"tín đồ" của một suy nghĩ phá cách, một thứ có thể tạo ra 1 mối liên kết bí ẩn giữa những con người kỳ lạ nhưng khác biệt.' +
'We are Satthat!'

const head =
  <Head title="Satthatcreed" />
const navBar = <>
  <div className="navigation-bar ">
    <div className="container d-flex justify-content-between align-items-center">
      <img className="logo" src="/static/logo.png" alt="logo" />
      <h4 className="slogan "><p className="hide"> Hide identities </p> show characteristics</h4>
    </div>
    { /*language=SCSS*/ }
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
      font-size: 23px;
      font-weight: 500;
      font-style: italic;
      text-shadow: 2px 1px 3px rgba(0,0,0,0.5);
      color: rgba(255,255,255,0.8);
     }
     .hide{
       color: rgba(0,0,0,0.6);
    text-shadow: 2px 1px 3px rgba(255,255,255,0.2);
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
   @media (max-width: 575.98px){
    .slogan{
    font-size: 17px;
     }
   .logo {
      width: 80px;
  }

   }
    `}</style>
  </div>
</>

const name = order => <>
  <div className="name d-flex w-100 justify-content-center align-items-center vh-1 ">
    <p className={order === 1 ? 'text-left' : 'text-right'}><span>SAT</span><span>THAT</span><span className="red">CREED</span></p>
  </div>
  { /*language=SCSS*/ }
  <style jsx>{`
     .red {
  color: #97231C!important;
  }
     .name p span
{
    display: block;
    font-weight: bold;
    font-size: 14vw;
    line-height: 14vw;
    color: #C4C4C4;
}
.name{
padding-top: 100px;
padding-bottom: 100px;
}

   `}</style>
</>

const title = <>
  <h1 className="symbol ">RAVEN

    { /*language=SCSS*/ }
    <style jsx>{`
     .symbol {

     color: white;
     margin-bottom: 3px;
     }
      @media (max-width: 575.98px){
    .symbol {
     font-size: 30px;
     font-weight: 900;
     }
     }
   `}</style></h1>

</>
const symbol = <div>
  <img className="symbol" src="/static/logo.png" alt="symbol" width="60"/>
{ /*language=SCSS*/ }
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

  { /*language=SCSS*/ }
  <style jsx>{`
     .year {
     color: white;
     margin-bottom: 20px;
     font-weight: 300;
     font-size: 19px;
     }
      @media (max-width: 575.98px){
       .year {
         font-size: 13px;
       }
     }
   `}</style>
</h4>
</>

const description = <>
  <h4 className="description">{DESCRIPTION}
    { /*language=SCSS*/ }
    <style jsx>{`
     .description {
     padding-bottom: 10px;
     color: white;
     font-weight: 300;
      font-size: 21px;
      font-style: italic;
      word-spacing: .05em;
      line-height: 1.3;
     }
     @media (max-width: 575.98px){
       .description {
         font-size: 17px;
       }
     }
   `}</style>
  </h4>

</>

const info = order => <>
  <div className={`d-flex w-100 info justify-content-${order === 1 ? 'end' : 'start'} align-items-center`}>
    <div className="wrapper">
      <div className="sub-image image d-md-none d-block">
        {subImage(order)}
      </div>
      <div className="title-symbol row ver-center">
        {title}
        {symbol}
      </div>
      {year}
      {description}
      {button}
    </div>
    { /*language=SCSS*/ }
    <style jsx>{`
     .info {
        background-color:#C4C4C4;
        height: 100vh;
     }
     .wrapper{
     padding-left: ${order === 1 ? 100 : 0}px;
     padding-right: ${order === 2 ? 100 : 0}px;
      width: 400px;
     }
     .title-symbol{
     padding-left: 15px;
     }
      @media (max-width: 575.98px){
       .info {
        height: auto;
     }
    .wrapper{
    padding:  30px 30px 100px 30px;
     width: auto;
      height: auto;
     }

     }
     @media (min-width: 576px) and (max-width: 767.98px) {
     .info {
        height: auto;
        }
      }
       .wrapper{
    padding:  30px 30px 100px 30px;
     width: auto;
      height: auto;
     }

      @media (min-width: 767.98px)  {
       .wrapper{
     width: 36vw;
     }
     }

   `}</style>
  </div>
</>
const subImage = (order) => <>
<div className="image-wrapper d-flex justify-content-center align-items-center">
  <img className="image" src={`/static/tshirt${order}.png`} alt="product-image" />
  { /*language=SCSS*/ }
  <style jsx>{`
  .image-wrapper{
  padding-bottom: 30px;
  padding-top: 30px;
  }
.image{
 width: 80vw;
}
 @media (min-width: 576px) and (max-width: 767.98px) {
   .image{
     width: 60vw;
   }
   }
   `}</style>
</div>

</>

const image = (order) => <>
<div className="image d-none d-md-block">
  <img src={`/static/tshirt${order}.png`} alt="product-image" width="400"/>
  { /*language=SCSS*/ }
  <style jsx>{`
.image{
 position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
   `}</style>
</div>

</>

const button = <>
<div className="button ">
  <a href="https://t.me/satthatcreed" className="">
  <span className="label">Mua ngay</span>
  </a>
  { /*language=SCSS*/ }
  <style jsx>{`
     .button {
     width: 131px;
height: 49px;
background: #FFD774;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
text-align: center;
     }
     .label{
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
const body = <>
  <div className="products">
    <div className="product-wrapper">
      {image(1)}
    <div className=" d-flex flex-column  flex-md-row">
      {name(1)}
      {info(1)}
    </div>
    </div>
    <div className="product-wrapper">
      {image(2)}
    <div className=" d-flex flex-column-reverse  flex-md-row">
      {info(2)}
      {name(2)}
    </div>
    </div>
    { /*language=SCSS*/ }
    <style jsx>{`
     .products {
        //height: 1000px;
        max-width: 1600px;
     }
     .product-wrapper{
     position: relative;
     }
      @media (max-width: 575.98px){
    .products{
    padding-top: 58px;
     }
     }
   `}</style>
  </div>
</>
const footer = <div className="footer-wrapper ">
  <div className="footer container  d-flex justify-content-end align-items-center">
  <p className="contact ">Liên hệ</p>
  <a href="https://t.me/satthatcreed" className="">
    <img src="https://lh3.googleusercontent.com/u1DT1-_6FLTqldVf9fplZoMQ2leaP-Szgej3AuGXOjmUbaTbWWu8OxURE3QtmEgxam20R7yr3Q=w128-h128-e365" alt="" className="img"/>
  </a><a href="https://www.facebook.com/hungbv2" className="">
    <img src="http://icons.iconarchive.com/icons/sicons/basic-round-social/256/facebook-icon.png" alt="" className="img"/>
  </a>
  </div>
  { /*language=SCSS*/ }
  <style jsx>{`
     .footer-wrapper {
        background-color: #30383f;
     }
     .footer{
      padding: 30px;
     }
     .contact{
     color: #e0e0e0;
     font-weight: 900;
     font-size: 13px;
     margin-right: 10px;
     margin-bottom: 0px;
     margin-top: 20px;
     display: none;
     }
     .img{
        margin-left: 10px;
        width: 40px;
     }
   `}</style>
</div>
const Home = () => (
  <div>
    {head}
    {navBar}
    {body}
    {footer}
    { /*language=SCSS*/ }
    <style jsx >{indexStyles}</style>
  </div>
)

export default withGA("UA-131737658-1", Router)(Home);