import { Injectable } from "@angular/core";
import { userData, UserDetail } from "./user-data";


@Injectable({
    providedIn: 'root',
})

export class UserService{


    getUserData(storageName: string) : UserDetail[] | undefined {

        var data = localStorage.getItem('userData') as string;

        if(data === undefined || data === null || data === '') {
           this.setUserData('userData', userData);
           return userData;
        }

        var parsedData: UserDetail[] = JSON.parse(data);
        return userData;
    }

    setUserData(storageName: string, data: UserDetail[]) : void {

        if(data!){
            data = userData;
        }

        localStorage.setItem(storageName, JSON.stringify(data));
    }

    deleteUserData(id: number): void{

    }

    addorupdateUserData(data: UserDetail): void{
        if(data.id !== 0){

           // var fetchData = this.getUserData();

        }else{

        }

    }
}