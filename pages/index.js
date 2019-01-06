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
  <div className="navigation-bar row ver-end hor-sb">
    <img src="/static/logo.png" alt="logo" width={140} height={70}/>
    <h4 className="slogan"><span className="hide"> Hide identities </span> show characteristics</h4>
    { /*language=SCSS*/ }
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .navigation-bar {
         width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left:80px;
        padding-right: 80px;
        position: fixed;
        z-index: 100;
      }
     .slogan {
      color: white;
      font-size: 23px;
      margin-bottom: 5px;
      margin-top: 0px;
      margin-left: 20px;
      margin-right: 170px;
      font-weight: 500;
      font-style: italic;
      text-shadow: 2px 1px 3px rgba(0,0,0,0.5);
      color: rgba(255,255,255,0.8);
     }
     .hide{
       color: rgba(0,0,0,0.6);
    text-shadow: 2px 1px 3px rgba(255,255,255,0.2);
     }
     .hide::before {
  content: "\\201C";
}

.slogan::after {
  content: "\\201D";
}
    `}</style>
  </div>
</>

const name = <>
  <div className="name f1 center">
    <p><span>SAT</span><span>THAT</span><span className="red">CREED</span></p>
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
    font-size: 170px;
    color: #C4C4C4;
}

   `}</style>
</>
const title = <>
  <h1 className="symbol">RAVEN

    { /*language=SCSS*/ }
    <style jsx>{`
     .symbol {
     color: white;
     margin-bottom: 3px;
     }
   `}</style></h1>

</>
const symbol = <div>
  <img src="/static/logo.png" alt="symbol" width="60"/>
{ /*language=SCSS*/ }
  <style jsx>{`
     .symbol {
     }
   `}</style>
</div>
const year = <>
<h4 className="year">San xuat 2018

  { /*language=SCSS*/ }
  <style jsx>{`
     .year {
     color: white;
     margin: 0px;
     font-weight: 300;
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
     }
   `}</style>
  </h4>

</>

const info = order => <>
  <div className="f1 info center">
    <div className="wrapper">
      <div className="row ver-center">
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
     }
     .wrapper{
     padding-left: ${order === 1 ? 100 : 0}px;
     padding-right: ${order === 2 ? 100 : 0}px;
      width: 400px;
      height: 400px;
     }
   `}</style>
  </div>
</>
const image = (order) => <>
<div className="image">
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
  <span className="label">Mua ngay</span>
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
     }
   `}</style>
</div>

</>
const body = <>
  <div className="products">
    <div className="product-wrapper">
      {image(1)}
    <div className="product row">
      {name}
      {info(1)}
    </div>
    </div>
    <div className="product-wrapper">
      {image(2)}
    <div className="product row">
      {info(2)}
      {name}
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
     .product {
      height: 100vh;
     }
   `}</style>
  </div>
</>
const Home = () => (
  <div >
    {head}
    {navBar}
    {body}

    { /*language=SCSS*/ }
    <style jsx >{indexStyles}</style>
  </div>
)

export default withGA("UA-131737658-1", Router)(Home);