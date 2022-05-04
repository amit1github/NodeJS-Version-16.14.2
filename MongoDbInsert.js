const dbConnect = require('./mongoDB01')

const insert = async() => {
    const db= await dbConnect()
    const result =await db.insert(
        [
            {
                name: "note 5",
                brand: "vivo",
                price: 320,
                category: "mobile"
            },
            {
                name: "mi note",
                brand: "MI",
                price: 120,
                category: "mobile"
            },
            {
                name: "iphone5",
                brand: "apple",
                price: 520,
                category: "mobile"
            },
        ]
    )
    if (result.acknowledged) {
        console.log("data inserted");
    }
} 

insert()