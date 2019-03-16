/* eslint-disable react/no-unknown-property */
import React from 'react'
import NextHead from 'next/head'
import {string} from 'prop-types'

const defaultDescription = 'Hide identities, show characteristics'
const defaultOGURL = 'https://satthatcreed.com'
const defaultOGImage = './static/logo'

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8"/>
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="google-site-verification" content="zmDDwbWZAS_IkEcsTWwplW69c5Sq8AtCZsedrkoepos"/>
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png"/>
    <link rel="apple-touch-icon" href="/static/touch-icon.png"/>
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882"/>
    <link rel="icon" href="/static/favicon.ico"/>
    <meta property="og:url" content={props.url || defaultOGURL}/>
    <meta property="og:title" content={props.title || ''}/>
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:image" content={props.ogImage || defaultOGImage}/>
    <meta property="og:image" content={props.ogImage || defaultOGImage}/>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"/>


    <React.Fragment>
      <script dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '159929648043274');
        fbq('track', 'PageView');`
      }}
      />
      <noscript dangerouslySetInnerHTML={{
        __html: `<img height="1" width="1" style="display:none"
                     src="https://www.facebook.com/tr?id=159929648043274&ev=PageView&noscript=1"
      />`
      }}
      />
    </React.Fragment>

    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
