module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}","./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale(90%)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(100%)"
          }
        },
        rotate: {
          "0%": {
            opacity: "0",
            transform: "rotate(-90deg)"
          },
          "100%": {
            opacity: "1",
            transform: "rotate(0deg)"
          }
        },
        rotateWidth: {
          "0%": {
            opacity: "0",
            transform: "scaleY(20%) skewY(90deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scaleY(98%) skewY(0deg)"
          }
        },
        rotateFixed: {
          "0%": {
            opacity: "0",
            transform: "rotate(75deg)"
          },
          "100%": {
            opacity: "1",
            transform: "rotate(0deg)"
          }
        },
        fadeInLeft: {
          "0%": {
            opacity: "0.6",
            transform: "translateX(-50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)"
          },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)"
          },
          "100%" :{
            opacity: "1",
            transform: "translateY(0px)"
          }
        },
        firstLt: {
          "0%": {
            transform: "translate(0%,0%)"
          },
          "100%" : {
            transform: "translate(-265%,-100%)"
          }
        },
        secondLt: {
          "0%": {
            transform: "translate(0%,0%)"
          },
          "100%" : {
            transform: "translate(-85%,0%)"
          }
        },
        thirdLt: {
          "0%": {
            transform: "translate(0%,0%)"
          },
          "100%" : {
            transform: "translate(5%,100%)"
          }
        },
        fourthLt: {
          "0%": {
            transform: "translate(0%,0%)"
          },
          "100%" : {
            transform: "translate(-5%,100%) rotate(90deg)"
          }
        },
        fifthLt: {
          "0%": {
            transform: "translate(0%,0%)"
          },
          "100%" : {
            transform: "translate(185%,-100%)"
          }
        },
        finalLt: {
          "from": {
            transform: "translate(0%,0%)"
          },
          "to" : {
            transform: "translate(175%,0%)"
          }
        },
        circle: {
          "from" : {
            transform: "translate(65%,-50%)"
          },
          "to" : {
            transform: "translate(-50%,-50%)"
          }
        },
        rainbow: {
          "0%": {backgroundColor: "#000"},
          "25%": {backgroundColor: "#01c7af"},
          "35%": {backgroundColor: "#feb287"},
          "45%": {backgroundColor: "#630b04"},
          "55%": {backgroundColor: "#990dac"},
          "65%": {backgroundColor: "#1a0492"},
          "75%": {backgroundColor: "#dd0010"},
          "85": {backgroundColor: "#ffcccd"},
          "90%": {backgroundColor: "#f6a713"},
          "92%": {backgroundColor: "#09a84f"},
          "94%": {backgroundColor: "#ffe603"},
          "96%": {backgroundColor: "#cc1481"},
          "98%": {backgroundColor: "#f7e800"},
          "99%": {backgroundColor: "#c80e81"},
          "100%": {backgroundColor: "#01c7af"},
        }
      }
    },
  },
  plugins: [],
}
