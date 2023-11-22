async function getUsers(e) {
    console.log('getUseres')
    const results = await fetch('/users')

   console.log(results);
}

function clearUsers(e) {

}

document.querySelector("#fetch-users").addEventListener("click", () => console.log('click'), false);
document.querySelector("#clear-users").addEventListener("click", clearUsers);