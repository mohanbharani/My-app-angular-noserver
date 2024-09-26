import { Injectable } from "@angular/core";
import { userData, UserDetail } from "./user-data";
import { BackendService } from "./backend.service";
import AppConstant from "../constant/appConstant";
import { from, Observable } from "rxjs";


@Injectable()
export class UserService{

    userData: UserDetail[] = [];

    constructor(private api: BackendService<UserDetail>){
        this.api.initState(AppConstant.userData, userData)
    }

    getAllUser = (): Observable<UserDetail[]> => { 
        return from(this.api.getAll());
    }

    getById = (id:number, cb: (data: UserDetail) => void): void => { 
        this.api.getById(id).then((res: UserDetail) => {
            if (res) cb && cb(res);
        });
    }

    deleteUserData = (id: number): void => {
        this.api.deleteById(id);
    }

    addUserData = (newUser: UserDetail): string =>{
        console.log("addUserData :: ", newUser);
        
        return this.api.add(newUser);
    }

    updateUserData = (user: UserDetail): void =>{
        this.api.update(user).then(res => res);
    }
}