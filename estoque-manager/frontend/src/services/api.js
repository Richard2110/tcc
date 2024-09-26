//EXEMPLO PARA CONFIGURAR ARQUIVO PARA CONSUMIR API

import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // URL do nosso backend

//Função para obter produtos 
export const getPrducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data; //Retornando os dados da resposta
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; //Repassando o erro
    }
};


//Função para criar produto
export const createProduct = async (product) => {
    try {
        const response = await axios.post(`${API_URL}/products`, product);
        return response .data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};