import { Injectable } from "@angular/core";
import { userData, UserDetail } from "./user-data";
import { JsonPipe } from "@angular/common";


@Injectable({
    providedIn: 'root',
})
export class BackendService {

    getDefaultUserData(storageName: string): any {
        this.setData(storageName, userData);
        return userData;
    }

    getData(storageName: string): Promise<any> {

        return new Promise((resolve, reject) => {

            let data = localStorage.getItem(storageName);

            if((!data || data === '') && storageName === 'userData'){
                data = this.getDefaultUserData(storageName);
            }

            if(!data || data === '')
                return resolve(null);

            try {
                resolve(data);
            }
            catch(e){
                reject(e);
            }
        });
        // let data = localStorage.getItem(storageName) as string;

        // if ((data === undefined || data === null || data === '') && storageName === 'userData') {
        //     data = this.getDefaultUserData(storageName);
        // }

        // var parsedData = JSON.parse(data);
        // return parsedData;
    }

    setData<Type>(storageName: string, data: Type): void {
        localStorage.setItem(storageName, JSON.stringify(data));
    }

    deleteData<Type>(storageName: string, deleteObj: Type): void {

        // var data = JSON.parse(this.getData(storageName));

        // data = data.filter((x: Type) => x === deleteObj);
        // this.setData(storageName, data);

        //return data;
        
    }

    addorupdateData(data: any): void {
        if (data.id !== 0) {

            //var fetchData = this.getUserData();

        } else {

        }

    }
}