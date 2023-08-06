import dotenv from "dotenv";

dotenv.config();

export default {
    RESTAURANT_URL: process.env.RESTAURANT_URL,
    IMAGE_URL: process.env.IMAGE_URL,
    RESTAURANT_MENU_URL: process.env.RESTAURANT_MENU_URL
}