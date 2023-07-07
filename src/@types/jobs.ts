
export type Job = {
    id: string;
    title: string;
    description: string;
    prerequisites: string;
    benefits: string;
    type: string;
    typeContract: string;
    salaryMin: number;
    salaryMax: number;
    federalUnit: string;
    modality: string;
    headquarters: string;
    indefiniteContract: boolean;
    contractType: string;
    affirmative: boolean;
    affirmativeType: string;
    company_id: string;
    createdAt: string;
    updatedAt: string;
    comments: any[];
    company: Company;
  };
  
  export type Company = {
    id: string;
    companyName: string;
    email: string;
    password: string;
    cnpj: string;
    mailConfirm: boolean;
    recoverPasswordToken: string;
    created_at: string;
    updated_at: string;
  };
  