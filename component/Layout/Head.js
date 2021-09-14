import React from 'react'

const Head = (props) => {

    const {title} = props
    return (
            <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/artfact-logo.PNG" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Artfact-NFT " />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/artfact-logo.PNG" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    {/* <!-- Google Fonts --> */}
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800"
      rel="stylesheet"
    />

    {/* <!-- Vendor CSS Files --> */}
    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
    <link
      href="assets/vendor/bootstrap/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
      rel="stylesheet"
    />
    <link
      href="assets/vendor/glightbox/css/glightbox.min.css"
      rel="stylesheet"
    />
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

    {/* <!-- Template Main CSS File --> */}
    <link href="assets/css/style.css" rel="stylesheet" />

    <title>{title}</title>
  </head>
    )
}


export default Head;