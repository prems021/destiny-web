
export class Driver {
  constructor(      
    
    
 
    public firstname :string,
    public lastname : string,
   public email : string,
   public countrycode :string,
   public phonenumber: string,
    public ref_code: string,
    public city: string,
 
    ) {  }
}

export class Driver_reg2 {
  constructor(      
    
    
 
    public car_year :string,
    public car_company : string,
    public car_model : string,
    public car_ofdoors: string,
    public car_color: string,
    public phonenumber:string
    
 
    ) {  }
}

export class Driver_reg3 {
  constructor(      
    
    
 
    public legal_firstname :string,
    public middle_name : string,
    public legal_lastname : string,
    public ssn: string,
    public dob: IDateModel,
    public license_num:string,
    public license_state:string,
    public license_expire:Object,
    public res_address_1: string,
    public res_address_2: string,
    public res_city: string,
    public res_state: string,
    public res_zipcode: string,
    public phonenumber:string
    
 
    ) {  }
}

export interface IDateModel {
  day: string;
  month: string;
  year: string;
  formatted: string;
  momentObj: Object;
}

export class Driver_reg3a {
  constructor(      
    
    
 
    public legal_firstname :string,
    public middle_name : string,
    public legal_lastname : string,
    public ssn: string,
    public dob: string,
    public license_num:string,
    public license_state:string,
    public license_expire:string,
    public res_address_1: string,
    public res_address_2: string,
    public res_city: string,
    public res_state: string,
    public res_zipcode: string,
    public phonenumber:string
    
 
    ) {  }
}

export class Dial {
  constructor(      
    
    
 
    public name :string,
    public dial_code : string,
    public code : string,
   
    
 
    ) {  }
}
