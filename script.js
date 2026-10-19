

    // When the page get load display all users
    function initialize(){
        display();
    }

    // add new users in usersList array
    function handleSubmit(event) {  
        event.preventDefault();
        const editId = sessionStorage.getItem('editId');
        if (editId) editData();
        else addData();

    }

    // use this function to display user on screen
    function display() {
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
        const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
        for (let i = 0; i < usersList.length; i++) {
            const user = usersList[i];
            const li = document.createElement('li');
            li.id = user.id;
            li.textContent = user.exp + ' ' + user.desc + ' ' + user.cat;
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click',function(){
                document.getElementById('exp').value = user.exp;
                document.getElementById('desc').value = user.desc;
                document.getElementById('cat').value = user.cat;
                sessionStorage.setItem('editId', user.id);
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function () {
                deleteData(user.id, li);
            });
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            ul.appendChild(li);
        }

    }

    // use this function to add user details into local storage
    function addData() {
        const exp = document.getElementById('exp').value;
        const desc = document.getElementById('desc').value;
        const cat = document.getElementById('cat').value;
        const user = {
            // id: Date.now(),
            exp: exp,
            desc: desc,
            cat:cat
        };
        const usersList = JSON.parse(localStorage.getItem('usersList'))||[];
        usersList.push(user);
        localStorage.setItem('usersList',JSON.stringify(usersList));
        display();
        document.getElementById('exp').value = '';
        document.getElementById('desc').value = '';
        document.getElementById('cat').value = '';
    }


    // use this function to delete the user details from local store and DOM (screen)
    function deleteData(id,li) {
        const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
        let updatedUsers = [];
        for (let i = 0; i < usersList.length; i++){
            let user = usersList[i];
            if (id !== user.id) {
                updatedUsers.push(user);
            }
        }
        localStorage.setItem('usersList',JSON.stringify(updatedUsers));
        li.remove();
    }

    // use this function to update user details from local storage
    function editData() {
        const editId = sessionStorage.getItem('editId');
        const exp = document.getElementById('exp').value;
        const desc = document.getElementById('desc').value;
        const cat = document.getElementById('cat').value;
        const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
        for (let i = 0; i < usersList.length; i++){
            let user = usersList[i];
            if (editId == user.id) {
                user.exp = exp;
                user.desc= desc;
                user.cat = cat;
                break;
            }
        }
        localStorage.setItem('usersList', JSON.stringify(usersList));
        const li = document.getElementById(editId);
        if(li!==null) li.firstChild.textContent = exp + ' ' + desc + ' ' + cat;
        sessionStorage.removeItem('editId');
        document.getElementById('exp').value = '';
        document.getElementById('desc').value = '';
        document.getElementById('cat').value = '';
    }

module.exports = handleSubmit;