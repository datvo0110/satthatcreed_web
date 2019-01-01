import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import indexStyles from './index.scss'

const DESCRIPTION = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

const head =
  <Head title="Home" />
const navBar = <>
  <div className="navigation-bar">
    <img src="/static/logo.png" alt="logo" width={73}/>
    { /*language=SCSS*/ }
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .navigation-bar {
         width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 16px;
        position: fixed;
        z-index: 100;
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
  <h1 className="symbol">Assassin

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

export default Home
