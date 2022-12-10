import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector: "bulba-auth",
    templateUrl: "auth.component.html"
})

export class AuthComponent{
    public buttonClicked!: string;
    private authObservable!: Observable<AuthResponse>;
    
    constructor(private authService:AuthService){
    }
    public onSubmit(data: NgForm){
        console.log("Button clicked" + this.buttonClicked);
        console.log(data.value);

        if(this.buttonClicked=='Signup'){
        this.authObservable = this.authService.signup(data.value.email, data.value.password);
        }
        if(this.buttonClicked=='Login'){
            this.authObservable = this.authService.logIn(data.value.email, data.value.password);
        }
        
        
        this.authObservable.subscribe((data:AuthResponse) => {
            console.log(data);
        },

        //error display
        error => {
            console.log(error.error.error.message);
        }
        );


        data.resetForm();

    }

}