let button = document.querySelector(".btn")
let items = document.querySelector(".items")



button.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "JSON")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener("load", () => {
        // console.log(JSON.parse(request.response));
        const data = JSON.parse(request.response)
        data.forEach(item => {
            const div = document.createElement('div')

            div.innerHTML = `
               <div class="card">
                    <img src="${item.img}">
                    <h2>${item.name}</h2>
                    <span>${item.price}</span>
               </div>
               `

            items.append(div)
        })
    })
}