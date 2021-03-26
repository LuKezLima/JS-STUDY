let ComaparacomThis = function (param) {
    console.log(param === this)
}

ComaparacomThis(global)


const obj = {}

ComaparacomThis = ComaparacomThis.bind(obj)
ComaparacomThis(global)
ComaparacomThis(obj)

let comparecmArrow = param => console.log(this === param)

comparecmArrow(global)
ComaparacomThis(this)
