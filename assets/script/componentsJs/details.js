document.addEventListener('DOMContentLoaded', function() {
     
const accInfo = document.querySelector(".more__info-accounts")
const repo = JSON.parse(localStorage.getItem('selectedRepo'))


const owner = repo.owner


const moreInfoDiv = document.createElement("div")
moreInfoDiv.className = "more__info-div"

const avatarLoginDiv = document.createElement("div")
avatarLoginDiv.className = "avatar__login-div"

const avatarDiv = document.createElement("div")
avatarDiv.className = "avatar__div"

const avatar = document.createElement("img")
avatar.src = owner.avatar_url
avatar.alt = "githubImg"

const loginDiv = document.createElement("div")
loginDiv.className = "login__div"

const loginSpan = document.createElement("span")
loginSpan.className = "login__span-title"
loginSpan.innerHTML = "Login:"

const login = document.createElement("h3")
login.className = "login__title"
login.innerHTML = owner.login

const detailsUrlDiv = document.createElement("div")
detailsUrlDiv.className = "details__url-div"

const urlSpan = document.createElement("span")
urlSpan.className = "url__span-title"
urlSpan.innerHTML = "url:"

const detailsUrlTag = document.createElement("a")
detailsUrlTag.className = "details__link"
detailsUrlTag.href = repo.html_url
detailsUrlTag.innerHTML = repo.html_url
detailsUrlTag.target = "_blank"

const createdDiv = document.createElement("div")
createdDiv.className = "created__div-title"

const createdSpan = document.createElement("span")
createdSpan.className = "created__span-title"
createdSpan.innerHTML = "Created:"

const createdTag = document.createElement("p")
createdTag.className = "created__title"
createdTag.innerHTML = repo.created_at

const updateDiv = document.createElement("div")
updateDiv.className = "updated__div-title"

const updatedSpan = document.createElement("span")
updatedSpan.className = "updated__title-span"
updatedSpan.innerHTML = "updated:"

const updatedTag = document.createElement("p")
updatedTag.className = "updated__title"
updatedTag.innerHTML = repo.updated_at 

const descriptionDiv = document.createElement("div")
descriptionDiv.className = "description__div"

const descriptionTag = document.createElement("p")
descriptionTag.className = "description__title"
descriptionTag.innerHTML = repo.description

const nameDiv = document.createElement("div")
nameDiv.className = "name__div-details"

const nameTag = document.createElement("h2")
nameTag.className = "name__title-details"
nameTag.innerHTML = repo.name

const moreFieldDiv = document.createElement("div")
moreFieldDiv.className = "more__filed-div"

const watchersDiv = document.createElement("div")
watchersDiv.className = "warchers__div"

const watchersSpan = document.createElement("span")
watchersSpan.className = "watchers__span-title"
watchersSpan.innerHTML = "watchers:"

const watchersTag = document.createElement("p")
watchersTag.className = "watchers__tag-title"
watchersTag.innerHTML = repo.watchers

const idDiv = document.createElement("div")
idDiv.className = "id__div"

const idSpan = document.createElement("span")
idSpan.className = "id__span"
idSpan.innerHTML = "id:"

const idTag = document.createElement("p")
idTag.className = "id__tag"
idTag.innerHTML = repo.id

const userDiv = document.createElement("div")
userDiv.className = "user__div"

const userSpan = document.createElement("span")
userSpan.className = "user__span"
userSpan.innerHTML = "type:"

const userTag = document.createElement("p")
userTag.className = "user__title"
userTag.innerHTML = owner.type


moreInfoDiv.appendChild(avatarLoginDiv)
moreInfoDiv.appendChild(nameDiv)
moreInfoDiv.appendChild(descriptionDiv)
moreInfoDiv.appendChild(moreFieldDiv)
moreFieldDiv.appendChild(watchersDiv)
moreFieldDiv.appendChild(idDiv)
moreFieldDiv.appendChild(userDiv)

avatarLoginDiv.appendChild(avatarDiv)
avatarLoginDiv.appendChild(loginDiv)

avatarDiv.appendChild(avatar)

login.appendChild(loginSpan)
loginDiv.appendChild(login)
loginDiv.appendChild(detailsUrlDiv)
loginDiv.appendChild(createdDiv)
loginDiv.appendChild(updateDiv)

detailsUrlDiv.appendChild(urlSpan)
detailsUrlDiv.appendChild(detailsUrlTag)

createdDiv.appendChild(createdSpan)
createdDiv.appendChild(createdTag)

updateDiv.appendChild(updatedTag)
updateDiv.appendChild(updatedSpan)

nameDiv.appendChild(nameTag)

descriptionDiv.appendChild(descriptionTag)

watchersDiv.appendChild(watchersTag)
watchersTag.appendChild(watchersSpan)

idDiv.appendChild(idTag)
idTag.appendChild(idSpan)

userDiv.appendChild(userTag)
userTag.appendChild(userSpan)

accInfo.appendChild(moreInfoDiv)
})