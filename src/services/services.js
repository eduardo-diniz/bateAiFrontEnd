import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.134:3000',
});

const endpoints = {
  companies: '/companies',
  departments: '/departments',
  departmentId: '/departments',
  login: '/auth/login',
  user: '/users'
};

export const getCompanies = () => api.get(endpoints.companies);
export const createCompany = (companyData) => api.post(endpoints.companies, companyData);
export const getDepartment = () => api.get(endpoints.departments);
export const getDepartmentByID = (id) => api.get(`${endpoints.departmentId}/${id}`);

export const createDepartment = (departmentData) => api.post(endpoints.departments, departmentData);
export const createUser = (userData) => api.post(endpoints.user, userData);

// Função para realizar o login
export const login = (cpfOuCnpj, senha) => api.post(endpoints.login, { cpfOuCnpj, senha });

export default endpoints;
