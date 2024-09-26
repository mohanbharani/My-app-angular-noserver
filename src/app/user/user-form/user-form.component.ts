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
export class UserFormComponent implements OnInit {

    id: number = 0;
    profileForm!: FormGroup;

    countries = [ 'India','United States', 'Australia','Brazil','China','Russia','Pakistan'];
    constructor(private fb: FormBuilder,
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
        this.route.params.subscribe(params => this.id = +params['id']);
        this.initForm();

        if (this.id > 0) {
            console.log(this.id);
            this.userService.getById(this.id, (res) =>{
                this.profileForm.patchValue(res);
            } )
        }
    }

    private initForm(): void {
        this.profileForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            mobile: new FormControl('', [Validators.required, Validators.maxLength(13), Validators.minLength(10), Validators.pattern(/^(\+\d{1,3}?)?\d{10}$/)]),
            isActive: new FormControl(false),
            gender: new FormControl(''),
            country: new FormControl('')
        });
    }

    onSubmit(e: FormGroup) {

        if (e.valid) {
            const user: UserDetail = {
                id: this.id != 0 ? this.id : 0,
                ...e.value,
            }
            
            if (this.id === 0) {
                this.userService.addUserData(user);
            }else{
                this.userService.updateUserData(user);
            }
            
            this.router.navigate(['/']);
        }
    }
}