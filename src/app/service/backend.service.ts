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

    getData(storageName: string): string {

        let data = localStorage.getItem(storageName) as string;

        if ((data === undefined || data === null || data === '') && storageName === 'userData') {
            data = this.getDefaultUserData(storageName);
        }

        var parsedData = JSON.parse(data);
        return parsedData;
    }

    setData<Type>(storageName: string, data: Type): void {
        localStorage.setItem(storageName, JSON.stringify(data));
    }

    deleteData<Type>(storageName: string, deleteObj: Type): Type[] {

        var data = JSON.parse(this.getData(storageName));

        data = [ ...data, deleteObj ];
        this.setData(storageName, data);

        return data;
    }

    addorupdateUserData(data: any): void {
        if (data.id !== 0) {

            //var fetchData = this.getUserData();

        } else {

        }

    }
}