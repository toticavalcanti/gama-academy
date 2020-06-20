interface User {
    name: string;
    email: string;
    address?: string; //the ? is because this field is optional.
}

function getUser(): User {
    return {
        name: 'Toti',
        email: 'toti@mail.com'
    }
}

function setUser(user: User){
    //...
}