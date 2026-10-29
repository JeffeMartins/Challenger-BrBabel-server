import 'dotenv/config';
function required(name: string): string { const value=process.env[name];if(!value)throw new Error(`Configure ${name}`);return value; }
export default { get secret(){const value=required('JWT_SECRET');if(value.length<32)throw new Error('JWT_SECRET must have at least 32 characters');return value;},get user(){return required('AUTH_USER');},get password(){return required('AUTH_PASSWORD');} };
