import ran1 from './ran1.jpeg'
import ran2 from './ran2.jpeg'
import ran3 from './ran3.jpeg'
import searchicon from './search_icon.jpg'
import dropdown_icon from './dropdown_icon.png'
import menu_icon from './menu_icon.jpg'
import profile_icon from './profile_icon.jpg'
import cart_icon from './cart_icon.webp'
import hero from './hero.jpeg'
import exchange_icon from './exchange_icon.png'
import return_icon from './return_icon.png'
import support_icon from './support_icon.png'

export const assets = {
    hero,
    ran1, ran2, ran3,
    searchicon, dropdown_icon, menu_icon, profile_icon, cart_icon, 
    exchange_icon, return_icon, support_icon
}

export const products = [
    {
        _id: "aaaa",
        name: "Tennis Balls",
        description: "Tennis Balls ideal for Box Cricket",
        price: 80,
        image: [ran1, ran2, ran3],
        category: "Sports",
        subCategory: "Cricket",
        sizes:[],
        date:121131523,
        bestseller: true
    },
    {
        _id: "aaab",
        name: "Tennis Balls",
        description: "Tennis Balls ideal for Box Cricket",
        price: 80,
        image: [ran1, ran2, ran3],
        category: "Apparels",
        subCategory: "Tennis",
        sizes:[],
        date:121131523,
        bestseller: true
    },
    {
        _id: "aaac",
        name: "Tennis Balls",
        description: "Tennis Balls ideal for Box Cricket",
        price: 80,
        image: [ran1, ran2, ran3],
        category: "Sports",
        subCategory: "Tennis",
        sizes:[],
        date:121131523,
        bestseller: false
    },
]