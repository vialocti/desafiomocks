import { Faker, es,en } from "@faker-js/faker";

const faker = new Faker({
    locale:es,

})

export const generateProduct=()=>{
    return{
        title:faker.commerce.productName(),
        isbn:faker.commerce.isbn(10),
        stock:faker.commerce.stock = Math.trunc(Math.random() * 100),
        price:faker.commerce.price(),
        id:faker.database.mongodbObjectId()
    }

}