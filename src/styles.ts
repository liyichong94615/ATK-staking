export const colors: any = {
  main: "25, 23, 23",
  gradDark: "21, 32, 87, 0.75",
  gradLight: "53, 61, 104, 0.75",
  bottomDark: "33, 36, 54, 0.75",
  bottomLight: "65, 74, 122, 0.75",
  border: "196, 196, 196, 0.3",
  fontColor: "250, 250, 250",
  white: "255, 255, 255",
  black: "0, 0, 0",
  dark: "12, 12, 13",
  grey: "169, 169, 188",
  darkGrey: "113, 119, 138",
  lightGrey: "212, 212, 212",
  blue: "101, 127, 230",
  lightBlue: "64, 153, 255",
  yellow: "250, 188, 45",
  orange: "246, 133, 27",
  green: "84, 209, 146",
  pink: "255, 51, 102",
  red: "214, 75, 71",
  purple: "110, 107, 233",
};

export const fonts = {
  size: {
    tiny: "10px",
    small: "14px",
    medium: "16px",
    large: "18px",
    h1: "60px",
    h2: "50px",
    h3: "40px",
    h4: "32px",
    h5: "24px",
    h6: "20px",
  },
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  family: {
    OpenSans: '"Open Sans", sans-serif',
  },
};

export const transitions = {
  short: "all 0.1s ease-in-out",
  base: "all 0.2s ease-in-out",
  long: "all 0.3s ease-in-out",
  button: "all 0.15s ease-in-out",
};

export const shadows = {
  soft: "0 4px 6px 0 rgba(50, 50, 93, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)",
  medium:
    "0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 0 1px 0 rgba(50, 50, 93, 0.02), 0 5px 10px 0 rgba(59, 59, 92, 0.08)",
  big: "0 15px 35px 0 rgba(50, 50, 93, 0.06), 0 5px 15px 0 rgba(50, 50, 93, 0.15)",
  hover:
    "0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)",
};

export const responsive = {
  xs: {
    min: "min-width: 467px",
    max: "max-width: 468px",
  },
  sm: {
    min: "min-width: 639px",
    max: "max-width: 640px",
  },
  md: {
    min: "min-width: 959px",
    max: "max-width: 960px",
  },
  lg: {
    min: "min-width: 1023px",
    max: "max-width: 1024px",
  },
  xl: {
    min: "min-width: 1399px",
    max: "max-width: 1400px",
  },
};

export const globalStyle = `
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700,800');

  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${fonts.family.OpenSans};
    font-style: normal;
    font-stretch: normal;
    font-weight: ${fonts.weight.normal};
    font-size: ${fonts.size.medium};
    background-color: rgb(${colors.white});
    color: rgb(${colors.dark});
    overflow-y:auto;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  	-webkit-text-size-adjust: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;  
  }

  button {
    border-style: none;
    line-height: 1em;
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  a, p, h1, h2, h3, h4, h5, h6 {
  	text-decoration: none;
  	margin: 0;
    padding: 0;
    margin: 0.7em 0;
  }

  h1 {
    font-size: ${fonts.size.h1}
  }
  h2 {
    font-size: ${fonts.size.h2}
  }
  h3 {
    font-size: ${fonts.size.h3}
  }
  h4 {
    font-size: ${fonts.size.h4}
  }
  h5 {
    font-size: ${fonts.size.h5}
  }
  h6 {
    font-size: ${fonts.size.h6}
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;  
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  ul, li {
  	list-style: none;
  	margin: 0;
  	padding: 0;
  }

  * {
    box-sizing: border-box !important;
  }


  input {
    -webkit-appearance: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  input[type="color"],
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="text"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  select:focus,
  textarea {
    font-size: 16px;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .MuiDialog-paperWidthMd {
    max-width: 850px !important;
  }
  .dropdown-toggle:focus{
    border-color: #ED2185 !important;
    box-shadow: 0 0 0 0.1rem rgba(237, 33, 133, 0.3) !important;
  }
  .slick-arrow {
    width: 50px !important;
    height: 100px !important;
    border-radius: 50%;
    z-Index:999;
  }
  .slick-arrow,
  .slick-next:focus {
    transform: scale(1) !important;
  }
  .slick-prev, .slick-next {
    top: 35% !important;
  }
  .slick-next::before,
  .slick-prev::before {
    font-family: "slick";
    line-height: 1;
    opacity: 1 !important;
  }
  .slick-prev::before {
    content: url("/images/sliderNext.png") !important;
  }
  
  .slick-next::before {
    content: url("/images/sliderBefore.png") !important;
  }
  .slick-next {
    right: 0px !important;
  }
  
  .slick-prev {
    left: 0px !important;
  }
  @media screen and (max-width: 600px) {
    .slick-arrow {
      width: 25px !important;
      height: 50px !important;
      z-Index:999;
    }
    .slick-prev::before {
      content: url("/images/sliderNext1.png") !important;
      width: 25px !important;
      height: 50px !important;
    }
    
    .slick-next::before {
      content: url("/images/sliderBefore1.png") !important;
      width: 25px !important;
      height: 50px !important;
    }
  }
  .MuiDialog-paperWidthSm {
    max-width: 441px !important;
  }
`;
