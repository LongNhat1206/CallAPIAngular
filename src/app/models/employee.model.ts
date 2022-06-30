export interface Employee{
    id: bigint;
    cityID: bigint;
    DistrictID: bigint;
    fullname: string;
    UserName: string;
    ShopName: string;
    Email: string;
    Gender: boolean;
    Birthday: Date;
    dateCreated:   Date;
}
export interface EmployeeModel{
    result: Employee[];
    errors: object;
    isSuccess: boolean;
    message: string;
}