import { Injectable } from "@angular/core";
import { UserDetail } from "./user-data";
import { BackendService } from "./backend.service";
import AppConstant from "../constant/appConstant";


@Injectable({
    providedIn: 'root',
})
export class UserService{

    constructor(private backendService: BackendService){}

    storageName = AppConstant.userData;
    noUser = AppConstant.noUser;

    getUserData = (): Promise<UserDetail[]> => { 
        return this.backendService.getData(this.storageName).then(res => {
         const    userdata = JSON.parse(res);
            console.log('Promise :: ',userdata);
            return userdata;
        }).catch(e => {
            console.log(e);
        });
    }
    
    deleteUserData = (userObj: UserDetail): void => {
        this.backendService.deleteData<UserDetail>(this.storageName, userObj);
    }

    
}