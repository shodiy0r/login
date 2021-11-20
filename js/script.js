const logOutBtn = document.querySelector('#logout');
const template = document.querySelector('#template').content
const elList = document.querySelector("#list")


function renderUser(person, element){
    person.forEach(item => {
        const clTemp = template.cloneNode(true)
        
        const newImg = clTemp.querySelector("#list__item-img")
        const elTitle = clTemp.querySelector("#list__title")
        const elLink = clTemp.querySelector("#list__email")

        newImg.setAttribute("src", item.avatar)
        elTitle.textContent = item.first_name +" "+ item.last_name
        elLink.textContent = item.email



        element.appendChild(clTemp)
    });

}
const token = JSON.parse(window.localStorage.getItem('__auth_token__'))

if(!token?.token){
    window.location.replace('login.html')
}

logOutBtn.addEventListener('click', () =>{
    window.localStorage.removeItem('__auth_token__');
    location.reload();
})

    async function fetchLogin(){
        const response = await fetch('https://reqres.in/api/users?page= 2',);
        
        const data = await response.json();

        const fullData = data.data

        renderUser(fullData, elList)
    }
    fetchLogin()
