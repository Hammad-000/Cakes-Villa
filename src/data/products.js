// In your products.js or wherever products is defined


 const products = [
    {
        id: 1,
        name: "Chocolate Cake", 
        image: "/images/cake1.jpg", // Fixed path and extension
        description: "Delicious chocolate cake with rich frosting",
        price: 2000,
    },  
    {
        id: 2,
        name: "Vanilla Cake",   
        description: "Classic vanilla cake with creamy icing",
        image: "/images/cake2.jpg", // Use different image names
        price: 1800,
    },
    {
        id: 3,  
        name: "Red Velvet Cake",
        image: "/images/cake2.jpg",
        description: "Moist red velvet cake with cream cheese frosting",
        price: 2200,
    },
    {
        id: 4,
        name: "Oreo Cake",
        description: "Moist oreo cake with cream cheese frosting",
        image: "/images/cake2.jpg",
        price: 2500,
    }
];
export default products