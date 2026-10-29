export function companyInput(input:unknown){
 if(!input || typeof input!=='object')throw new Error('Invalid company');const data=input as Record<string,unknown>;
 if(typeof data.name!=='string' || !data.name.trim() || data.name.length>160)throw new Error('Invalid name');
 if(typeof data.cnpj!=='string' || !/^\d{14}$/.test(data.cnpj))throw new Error('CNPJ must have 14 digits');
 if(typeof data.demand!=='number' || !Number.isSafeInteger(data.demand) || data.demand<0)throw new Error('Invalid demand');
 if(typeof data.annualBilling!=='number' || !Number.isFinite(data.annualBilling) || data.annualBilling<0)throw new Error('Invalid annual billing');
 if(typeof data.about!=='string' || data.about.length>512)throw new Error('Invalid description');
 return {name:data.name.trim(),cnpj:data.cnpj,demand:data.demand,annualBilling:data.annualBilling,about:data.about};
}
