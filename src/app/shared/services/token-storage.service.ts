import { Injectable } from "@angular/core";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const IS_AUTH  = "is-auth";


@Injectable({
    providedIn: 'root'
})


export class TokenStorageService{

    constructor(){}
    signOut(): void{
        window.sessionStorage.clear();
    }

    public saveToken(token: string): void{
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public saveIsAuth(authValue: boolean): void{
        window.sessionStorage.removeItem(IS_AUTH);
        window.sessionStorage.setItem(IS_AUTH, ""+ authValue);
    }
    public getToken(): string | null{
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public getIsAuth(): string | null{
        return window.sessionStorage.getItem(IS_AUTH);
    }

    public saveUser(user: any): void{
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUser(): any{
        const user = window.sessionStorage.getItem(USER_KEY);
        if(user){
            return JSON.parse(user);
        }

        return {};
    }

 
}