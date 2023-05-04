
function validator(options){
    formElement = document.querySelector(options.form)
    if(formElement){

        options.rules.forEach(rule => {
           var inputElement = formElement.querySelector(rule.selector)
           var errorElement = inputElement.parentElement.querySelector(".form-message")
            if(inputElement){
                inputElement.onblur = ()=>{
                var errorMessage = rule.test(inputElement.value)
                console.log("onblur",inputElement.value);
                if(errorMessage){
                    errorElement.innerText = errorMessage
                    inputElement.parentElement.classList.add("invalid")
                } else {
                    errorElement.innerText = ""
                    inputElement.parentElement.classList.remove("invalid")
                }
                }
            }
        });
        // console.log("inputElemensssst",inputElement);
        
    }
}

validator.isRequired = (selector) =>{
    return {
        selector:selector,
        test: (value) => {
            return value ? "" : "vui lòng nhập trường này" ;
        }
    }
}
validator.isEmail = (selector) =>{
    return {
        selector:selector,
        test: (value) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? "" : "vui long nhap email"
        }
    }
}
validator.minLength = (selector, min) =>{
    return {
        selector:selector,
        test: (value) => {
            return value.length >= min  ? "" : `vui lòng nhập ${min} kí tự`;
        }
    }
}
validator.isConfirmation = (selector, valueConfirm) => {
    return {
        selector,
        test: (value) => {
            return value === valueConfirm() ? "" : "trường này nhập vào chưa đúng"
        }
    }
}