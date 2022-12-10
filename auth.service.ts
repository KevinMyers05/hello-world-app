import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    endpoint: string = "signUp";
    signInEndpoint:string = "signInWithPassword";

    public constructor(private http:HttpClient){

    }

    public signup(email:string, password: string){
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken": true
        }
        return this.http.post<AuthResponse>(this.baseUrl + ":" + this.endpoint + "?" + "key=" + "AIzaSyB2GGHbX05r9U6ArPMOc5pnKg6B1u1DH7E", requestBody);
    }


    public logIn(email:string,password:string){
        const requestBody={
            "email":email,
            "password":password,
            "returnSecureToken":true
        };

        return this.http.post<AuthResponse>(this.baseUrl+':' + this.signInEndpoint +'?' + 'keys=' +'AIzaSyB2GGHbX05r9U6ArPMOc5pnKg6B1u1DH7E',requestBody);
    }
}