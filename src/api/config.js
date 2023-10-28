import axios from "axios";

export const TOKEN_CYPER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg"
export const configHeaders = () => { 
    return {
        TokenCybersoft :TOKEN_CYPER
    }
 }
 export const BASE_URL = 'https://movienew.cybersoft.edu.vn/api'

export const https = axios.create({
    baseURL: BASE_URL,
    headers: {
        TokenCybersoft:TOKEN_CYPER,
    }
  });