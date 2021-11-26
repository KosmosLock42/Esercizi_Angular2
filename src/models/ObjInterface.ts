//Enums




export enum Role {
    staff = "staff",
    student = "student",
    manager = "manager",
    admin = "admin",
  }
  
  export enum Gender {
    male = "male",
    female = "female",
    other = "other",
  }
  
  //Interface
  
  interface Place {
    city: string;
    street: string;
    postalCode: string;
  }
  
  interface Company {
    id?: number;
    name?: string;
    description?: string;
    location?: Place;
  };
  
  export interface IUser {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Place;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies?: Company[];
    gender: Gender;
  }
  

  