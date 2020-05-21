import {API} from "../../config"

export const signUp = async (user) => {

    try {
       const res = await fetch(`${API}/signup`, {
           method: "POST",
           headers: {
               Accept: "application/json",
               "Content-Type":"application/json"
           },
           body: JSON.stringify(user)
       });

       return res.json();
    } catch (error) {
        console.log(error);
    }
};


export const signIn = async (user) => {
    try {
        const res = await fetch(`${API}/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export const logOut = async () => {

    try {
        const res = await fetch(`${API}/logout`, {
            method : "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        });

        return res.status(200);

    } catch (error) {
        console.log(error);
    }
}




