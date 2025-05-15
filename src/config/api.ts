import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Define the base API endpoint
const ENDPOINT = process.env.NEXT_PUBLIC_API || 'https://dummyjson.com';

/**
 * Generic API function for making HTTP requests
 * @param url - The URL path to append to the base endpoint
 * @param method - The HTTP method to use (currently only supporting GET)
 * @param body - Optional request body for non-GET requests
 * @returns A Promise with the response data
 */
export default async function API<T>(
  url: string,
  method: "GET",
  body?: unknown,
): Promise<T> {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: `${ENDPOINT}/${url}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Add body for non-GET requests if provided
    if (body) {
      config.data = body;
    }

    const response: AxiosResponse<T> = await axios(config);
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API request failed: ${error.message}`, {
        cause: error.response?.status || 'unknown',
      });
    }
    throw error;
  }
}

// Product interface that matches the structure from dummyjson.com/products
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

// Response interface for the products endpoint
export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

/**
 * Fetch all products
 * @returns Promise with products data
 */
export const getProducts = (): Promise<ProductsResponse> => {
  return API<ProductsResponse>('products', 'GET');
};

/**
 * Fetch a single product by ID
 * @param id - The product ID
 * @returns Promise with product data
 */
export const getProductById = (id: number): Promise<Product> => {
  return API<Product>(`products/${id}`, 'GET');
};