import { Injectable } from "@angular/core";
import { userData, UserDetail } from "./user-data";
import { JsonPipe } from "@angular/common";

@Injectable({
    providedIn: 'root',
})
export class BackendService<T extends {id: number}> {

    getDefaultUserData(storageName: string): any {
        this.setData(storageName, userData);
        return userData;
    }

    getById(id): T {

    }
    getData(storageName: string): Promise<any> {

        return new Promise((resolve, reject) => {
            let data = localStorage.getItem(storageName);

            if((!data || data === ''|| data === null) && storageName === 'userData'){
                data = this.getDefaultUserData(storageName);
            }

            if(!data || data === '')
                return resolve(null);

            try {
                resolve(JSON.parse(data));
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

    setData<Type>(storageName: string, data: any): void {
        localStorage.setItem(storageName, JSON.stringify(data));
    }

    // async deleteData(storageName: string, deleteObj: string): Promise<void> {

    //     var data = await this.getData(storageName)

    //     data = data.filter((x) => x === deleteObj);
    //     this.setData(storageName, data);

    //     return data;
        
    // }

    addorupdateData(storageName: string, data: any): void {
        if (data.id === 0) {

            this.getData(storageName).then(res => {
                
            })
            //var fetchData = this.getUserData();

        } else {

        }

    }
}