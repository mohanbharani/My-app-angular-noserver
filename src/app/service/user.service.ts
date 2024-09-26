import { Injectable } from "@angular/core";
import { UserDetail } from "./user-data";
import { BackendService } from "./backend.service";
import AppConstant from "../constant/appConstant";


@Injectable()
export class UserService{

    constructor(private backendService: BackendService<UserDetail>){}

    storageName = AppConstant.userData;
    noUser = AppConstant.noUser;

    userData: UserDetail[] = [];

    getUserData = (): Promise<UserDetail[]> => { 
        return this.backendService.getData(this.storageName).then(res => {
            console.log('getUserData :: ',res);
            
            const userdata: any = res; //JSON.parse(res);
            this.userData = userdata;
            return userdata;
        }).catch(e => {
            console.log(e);
        });
    }

    findUserData = async (id: number): Promise<UserDetail> => { 
        this.userData = await this.getUserData();

        const user = this.userData.find(x => x.id === id) as UserDetail;

        console.log('find user data :: ',user);
        

        if(!user)
            throw new Error(`User with id ${id} not found`);

        return user;
        
    }
    
    
    deleteUserData = (id: number): void => {
        var data  = this.userData.filter(x => x.id !== id);
        this.backendService.setData(this.storageName, data);

    }

    addUserData = async (newUser: UserDetail): Promise<string> =>{
        this.userData = await this.getUserData();

        const maxId = this.userData.length > 0 ? Math.max(...this.userData.map(o => o.id)) : 0;
        newUser.id = maxId + 1;
        console.log('this.userData :: ',this.userData);
        
        var data = [...this.userData, newUser];
        this.backendService.setData(this.storageName, data);

        return 'User added successfully';
    }
    
}