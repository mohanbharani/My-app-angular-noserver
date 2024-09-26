export interface UserDetail{
    id: number,
    firstName: string,
    lastName: string,
    mobile: number,
    email: string,
    isActive: boolean,
    gender: string,
    country: string,

};

export interface Address{
    address1: string,
    address2: string,

    city: string,
    state: string,
    country: string,
    pincode: number,

};

export const userData: UserDetail[]  =  [
    { id: 1, firstName: 'Bharani', lastName: 'Kumar', mobile: 1234567890, email: 'bharani.kumar@rencata.com', isActive: true, gender: 'Male', country: 'India' },
    { id: 2, firstName: 'Raj', lastName: 'Kumar', mobile: 9874563210, email: 'raj.kumar@rencata.com', isActive: true, gender: 'Male', country: 'India' },
    { id: 3, firstName: 'Panneer', lastName: 'Selvam', mobile: 5412369870, email: 'panneer.selvam@rencata.com', isActive: true, gender: 'Male', country: 'India' },
    { id: 4, firstName: 'Gajalakshmi', lastName: 'Sathish Babu', mobile: 5632897410, email: 'gajalakshmi.s@rencata.com', isActive: true, gender: 'Female', country: 'India' },
];