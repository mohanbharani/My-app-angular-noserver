export interface UserDetail{
    id: number,
    firstName: string,
    lastName: string,
    mobile: number,
    email: string,
    isActive: boolean,

};

export const userData: UserDetail[]  =  [
    { id: 1, firstName: 'Bharani', lastName: 'Kumar', mobile: 1234567890, email: 'bharani.kumar@rencata.com', isActive: true },
    { id: 2, firstName: 'Raj', lastName: 'Kumar', mobile: 9874563210, email: 'raj.kumar@rencata.com', isActive: true },
    { id: 3, firstName: 'Panneer', lastName: 'Selvam', mobile: 5412369870, email: 'panneer.selvam@rencata.com', isActive: true },
];