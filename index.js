document
.getElementById("githubForm")
.addEventListener("submit", function (event) {
  event.preventDefault()
  const username = document.getElementById("username").value
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("avatar").src = data.avatar_url
      document.getElementById(
        "login"
      ).textContent = `Username: ${data.login}`
      document.getElementById("name").textContent = `Name: ${
        data.name || "Not available"
      }`
      document.getElementById(
        "publicRepos"
      ).textContent = `Public Repos: ${data.public_repos}`
      document.getElementById(
        "publicGists"
      ).textContent = `Public Gists: ${data.public_gists}`
      document.getElementById(
        "createdAt"
      ).textContent = `Profile Created At: ${
        new Date(data.created_at).toISOString().split("T")[0]
      }`
      document.getElementById("userInfo").style.display = "block"
    })
    .catch((error) => {
      console.error("Error:", error)
      alert("User not found!")
    })
})
