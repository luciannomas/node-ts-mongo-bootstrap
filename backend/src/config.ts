import dotenv from 'dotenv'
dotenv.config(); //Llamo a la funcion para que cargue la variable de entorno

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'MernTsDb',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD ||'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: 3003 || process.env.PORT
}