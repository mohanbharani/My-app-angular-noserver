import { Injectable } from "@angular/core";
import { userData, UserDetail } from "./user-data";
import { JsonPipe } from "@angular/common";

@Injectable({
    providedIn: 'root',
})
export class BackendService<T extends {id: number}> {

    private _item: string = '';
    private _defaultData: T[] = [];

    public initState(item: string, defaultData: T[]){
        this._item = item;
        this._defaultData = defaultData;
    }
    
    private get _data(): T[]{
        const data = localStorage.getItem(this._item);
        if(data && data.length) return JSON.parse(data);
        return this._defaultData;
    }

    private set _data(value: T[]){
        localStorage.setItem(this._item, JSON.stringify(value));
    }

    public getAll(): Promise<T[]>{
        return new Promise((resolve) => resolve(this._data));
        //return new Promise((resolve) => resolve(this._data.reduce((a) => this._defaultData = a,this._defaultData)));
    }

    public getById(id: number): Promise<T>{
        return new Promise((resolve) => resolve(this._data.filter(x => x.id === id)[0]));
    }

    public deleteById(id: number): void{
        this._data = this._data.filter(x => x.id !== id);
    }

    public add(data: T): string {
        if(!data) {
            console.log("value is null or empty");
            return "value is null or empty";
        } 

        data.id = (this._data.length > 0 ? Math.max(...this._data.map(x => x.id)) : 0) + 1;
        const updatedData = [...this._data, data];
        updatedData.sort((a, b) => a.id - b.id);
        this._data = updatedData;
        return 'User added successfully';
    }

    public async update(data: T): Promise<string>{
        if(!data) {
            console.log("value is null or empty");
            return "value is null or empty";
        } 

        const olddata = await this.getById(data.id)
        const updatedData  = {...olddata, ...data}
       // updatedData .id = +updatedData.id;
        
        this._data = this._data.map(item => item.id === updatedData.id ?  updatedData : item);
        return 'User added successfully';
    }
}