import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserDetail } from "../../service/user-data";
import { UserService } from "../../service/user.service";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrl: './user-form.component.css',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, CommonModule],
    providers: [UserService]
})
export class UserFormComponent implements OnInit{

    id: number = 0;
    profileForm!: FormGroup;

    constructor(private fb: FormBuilder, 
        private userService: UserService, 
        private router: Router,
        private route: ActivatedRoute
    ) {}

//gender, select , backend service, add or update move to backend, delete confirm popup

    ngOnInit(): void {
        this.route.params.subscribe(params => this.id = params['id']);
        this.initForm();

        if(this.id > 0){
            console.log(this.id);
            
            this.userService.findUserData(this.id).then(res =>{
                console.log('checking user :: ',res);
        
                this.profileForm.patchValue(res);
            });
        }
    }

    private initForm(): void{
        this.profileForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            mobile: new FormControl('', [Validators.required, Validators.maxLength(13),Validators.minLength(10), Validators.pattern(/^(\+\d{1,3}?)?\d{10}$/)]),
            isActive: new FormControl(false, Validators.requiredTrue)
    
        });
    }
    

    onSubmit(e: FormGroup) {
        console.log(e);
        console.log(e.valid);

        if(e.valid){
            const newUser: UserDetail = {
                id: 0,
                ...e.value,
                firstName: e.value.firstName,
                lastName: e.value.lastName,
                mobile: e.value.mobile,
                email: e.value.email,
                isActive: e.value.isActive
            }

            this.userService.addUserData(newUser);

            this.router.navigate(['/']);

        }
        
        
}

onChangeActive():void{

}
    


}