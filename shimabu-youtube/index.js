const btn = document.getElementById('addBtn');
const lists = document.getElementById('lists');

//JSの仕事は2つ　データやろ取り　と　DOM操作

//function
async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

async function listUsers(){
    const users = await getUsers();

    //DOM操作
    for (user of users){
    const li = document.createElement('li');
    li.innerText = `${user.name}, email:${user.email}`;
    lists.appendChild(li);
    }
}


//データのやり取り
window.addEventListener('load', listUsers);//1
btn.addEventListener('click', listUsers);//2

