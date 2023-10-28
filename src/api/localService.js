export let userLocalStorage = {
    get : () => {  
        let dataJson = localStorage.getItem("USER")
        return JSON.parse(dataJson)
    },
    set : (user) => {
        let dataJS = JSON.stringify(user)
        localStorage.setItem("USER",dataJS)
      },
    remove : () => {
        localStorage.removeItem("USER")
      }
}