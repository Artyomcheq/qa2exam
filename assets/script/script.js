const form = document.querySelector(".form")
const inpSearch = document.querySelector(".input__search")
const accTag = document.querySelector(".write__accounts")

const getAcc = async () => {
  const query = inpSearch.value

  const response = await fetch(`https://api.github.com/search/repositories?q=${query}`)
  const data = await response.json();
  const repositories = data.items;
  localStorage.setItem("repositories", JSON.stringify(repositories))

  accTag.innerHTML = ""

  repositories.forEach((repo) => {
    const nameDiv = document.createElement("div")
    nameDiv.className = "repository__name-div"

    const nameTag = document.createElement("h3")
    nameTag.className = "name__title"
    nameTag.innerHTML = repo.name

    const urlDiv = document.createElement("div")
    urlDiv.className = "github__url-div"

    const urlTag = document.createElement("a")
    urlTag.className = "url__title"
    urlTag.textContent = "github"
    urlTag.target = "_blank"
    urlTag.href = repo.html_url

    const btnDiv = document.createElement("div")
    btnDiv.className = "show__more-btn-div"

    const btnShow = document.createElement("button")
    btnShow.className = "show__more"
    btnShow.innerText = "more"
    btnShow.setAttribute("data-repo", repo.id)

    nameDiv.appendChild(nameTag)
    btnDiv.appendChild(btnShow)
    nameDiv.appendChild(btnDiv)
    urlDiv.appendChild(urlTag)
    nameDiv.appendChild(urlDiv)
    accTag.appendChild(nameDiv)

    btnShow.addEventListener("click", async () => {
      localStorage.setItem("selectedRepo", JSON.stringify(repo))
      window.location.href = `../components/details.html?id=${repo.id}`
    })
  })

  inpSearch.value = ""

  return repositories
}

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  await getAcc()
})