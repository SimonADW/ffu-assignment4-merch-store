let products = [];

// let products = [
//   { title: "Slipknot Gray Chapter Hoodie", manufacturer: "American Apparel", artist: "Slipknot", price: 39.95, type: "hoodie", id: 1 },
//   { title: "Metallica Master of Puppets Hoodie", manufacturer: "Hanes", artist: "Metallica", price: 42.00, type: "hoodie", id: 2 },
//   { title: "AC/DC Back in Black Hoodie", manufacturer: "Gildan", artist: "AC/DC", price: 38.50, type: "hoodie", id: 3 },
//   { title: "Pink Floyd The Wall Hoodie", manufacturer: "Fruit of the Loom", artist: "Pink Floyd", price: 45.00, type: "hoodie", id: 4 },
//   { title: "Led Zeppelin IV Hoodie", manufacturer: "Bella + Canvas", artist: "Led Zeppelin", price: 41.75, type: "hoodie", id: 5 },
//   { title: "Nirvana Nevermind Hoodie", manufacturer: "American Apparel", artist: "Nirvana", price: 40.00, type: "hoodie", id: 6 },
//   { title: "Queen Greatest Hits Hoodie", manufacturer: "Hanes", artist: "Queen", price: 43.50, type: "hoodie", id: 7 },
//   { title: "The Beatles Abbey Road Hoodie", manufacturer: "Gildan", artist: "The Beatles", price: 39.95, type: "hoodie", id: 8 },
//   { title: "Red Hot Chili Peppers Californication Hoodie", manufacturer: "Fruit of the Loom", artist: "Red Hot Chili Peppers", price: 42.75, type: "hoodie", id: 9 },
//   { title: "Green Day Dookie Hoodie", manufacturer: "Bella + Canvas", artist: "Green Day", price: 39.95, type: "hoodie", id: 10 },
//   { title: "Linkin Park Hybrid Theory Hoodie", manufacturer: "American Apparel", artist: "Linkin Park", price: 41.50, type: "hoodie", id: 11 },
//   { title: "Pearl Jam Ten Hoodie", manufacturer: "Hanes", artist: "Pearl Jam", price: 43.00, type: "hoodie", id: 12 },
//   { title: "The Rolling Stones Sticky Fingers Hoodie", manufacturer: "Gildan", artist: "The Rolling Stones", price: 40.50, type: "hoodie", id: 13 },
//   { title: "Foo Fighters The Colour and the Shape Hoodie", manufacturer: "Fruit of the Loom", artist: "Foo Fighters", price: 39.95, type: "hoodie", id: 14 },
//   { title: "Blink-182 Enema of the State Hoodie", manufacturer: "Bella + Canvas", artist: "Blink-182", price: 42.00, type: "hoodie", id: 15 },
//   { title: "Black Sabbath Paranoid Hoodie", manufacturer: "American Apparel", artist: "Black Sabbath", price: 44.00, type: "hoodie", id: 16 },
//   { title: "Iron Maiden The Number of the Beast Hoodie", manufacturer: "Hanes", artist: "Iron Maiden", price: 39.95, type: "hoodie", id: 17 },
//   { title: "Ramones Rocket to Russia Hoodie", manufacturer: "Gildan", artist: "Ramones", price: 38.95, type: "hoodie", id: 18 },
//   { title: "Jimi Hendrix Are You Experienced Hoodie", manufacturer: "Fruit of the Loom", artist: "Jimi Hendrix", price: 45.00, type: "hoodie", id: 19 },
//   { title: "The Doors L.A. Woman Hoodie", manufacturer: "Bella + Canvas", artist: "The Doors", price: 41.75, type: "hoodie", id: 20 },
//   { title: "KISS Destroyer Hoodie", manufacturer: "American Apparel", artist: "KISS", price: 40.00, type: "hoodie", id: 21 },
//   { title: "U2 The Joshua Tree Hoodie", manufacturer: "Hanes", artist: "U2", price: 43.50, type: "hoodie", id: 22 },
//   { title: "R.E.M. Automatic for the People Hoodie", manufacturer: "Gildan", artist: "R.E.M.", price: 39.95, type: "hoodie", id: 23 },
//   { title: "The Clash London Calling Hoodie", manufacturer: "Fruit of the Loom", artist: "The Clash", price: 42.75, type: "hoodie", id: 24 },
//   { title: "Oasis Definitely Maybe Hoodie", manufacturer: "Bella + Canvas", artist: "Oasis", price: 39.95, type: "hoodie", id: 25 },
//   { title: "Radiohead OK Computer Hoodie", manufacturer: "American Apparel", artist: "Radiohead", price: 41.50, type: "hoodie", id: 26 },
//   { title: "Smashing Pumpkins Mellon Collie Hoodie", manufacturer: "Hanes", artist: "Smashing Pumpkins", price: 43.00, type: "hoodie", id: 27 },
//   { title: "Alice in Chains Dirt Hoodie", manufacturer: "Gildan", artist: "Alice in Chains", price: 40.50, type: "hoodie", id: 28 },
//   { title: "Soundgarden Superunknown Hoodie", manufacturer: "Fruit of the Loom", artist: "Soundgarden", price: 39.95, type: "hoodie", id: 29 },
//   { title: "Tool Ænima Hoodie", manufacturer: "Bella + Canvas", artist: "Tool", price: 42.00, type: "hoodie", id: 30 },
//   { title: "Slipknot We Are Not Your Kind T-Shirt", manufacturer: "American Apparel", artist: "Slipknot", price: 25.00, type: "t-shirt", id: 1 },
//   { title: "Metallica Ride the Lightning T-Shirt", manufacturer: "Hanes", artist: "Metallica", price: 27.50, type: "t-shirt", id: 2 },
//   { title: "AC/DC Highway to Hell T-Shirt", manufacturer: "Gildan", artist: "AC/DC", price: 24.00, type: "t-shirt", id: 3 },
//   { title: "Pink Floyd Dark Side of the Moon T-Shirt", manufacturer: "Fruit of the Loom", artist: "Pink Floyd", price: 28.00, type: "t-shirt", id: 4 },
//   { title: "Led Zeppelin Houses of the Holy T-Shirt", manufacturer: "Bella + Canvas", artist: "Led Zeppelin", price: 26.50, type: "t-shirt", id: 5 },
//   { title: "Nirvana In Utero T-Shirt", manufacturer: "American Apparel", artist: "Nirvana", price: 24.95, type: "t-shirt", id: 6 },
//   { title: "Queen Bohemian Rhapsody T-Shirt", manufacturer: "Hanes", artist: "Queen", price: 27.00, type: "t-shirt", id: 7 },
//   { title: "The Beatles Sgt. Pepper T-Shirt", manufacturer: "Gildan", artist: "The Beatles", price: 25.00, type: "t-shirt", id: 8 },
//   { title: "Red Hot Chili Peppers Blood Sugar Sex Magik T-Shirt", manufacturer: "Fruit of the Loom", artist: "Red Hot Chili Peppers", price: 28.50, type: "t-shirt", id: 9 },
//   { title: "Green Day American Idiot T-Shirt", manufacturer: "Bella + Canvas", artist: "Green Day", price: 24.95, type: "t-shirt", id: 10 },
//   { title: "Linkin Park Meteora T-Shirt", manufacturer: "American Apparel", artist: "Linkin Park", price: 26.00, type: "t-shirt", id: 11 },
//   { title: "Pearl Jam Vitalogy T-Shirt", manufacturer: "Hanes", artist: "Pearl Jam", price: 27.50, type: "t-shirt", id: 12 },
//   { title: "The Rolling Stones Exile on Main St. T-Shirt", manufacturer: "Gildan", artist: "The Rolling Stones", price: 25.50, type: "t-shirt", id: 13 },
//   { title: "Foo Fighters Wasting Light T-Shirt", manufacturer: "Fruit of the Loom", artist: "Foo Fighters", price: 24.95, type: "t-shirt", id: 14 },
//   { title: "Blink-182 Take Off Your Pants and Jacket T-Shirt", manufacturer: "Bella + Canvas", artist: "Blink-182", price: 27.00, type: "t-shirt", id: 15 },
//   { title: "Black Sabbath Heaven and Hell T-Shirt", manufacturer: "American Apparel", artist: "Black Sabbath", price: 28.00, type: "t-shirt", id: 16 },
//   { title: "Iron Maiden Fear of the Dark T-Shirt", manufacturer: "Hanes", artist: "Iron Maiden", price: 25.00, type: "t-shirt", id: 17 },
//   { title: "Ramones End of the Century T-Shirt", manufacturer: "Gildan", artist: "Ramones", price: 24.50, type: "t-shirt", id: 18 },
//   { title: "Jimi Hendrix Electric Ladyland T-Shirt", manufacturer: "Fruit of the Loom", artist: "Jimi Hendrix", price: 28.00, type: "t-shirt", id: 19 },
//   { title: "The Doors Strange Days T-Shirt", manufacturer: "Bella + Canvas", artist: "The Doors", price: 26.00, type: "t-shirt", id: 20 },
//   { title: "KISS Love Gun T-Shirt", manufacturer: "American Apparel", artist: "KISS", price: 24.95, type: "t-shirt", id: 21 },
//   { title: "U2 Achtung Baby T-Shirt", manufacturer: "Hanes", artist: "U2", price: 27.50, type: "t-shirt", id: 22 },
//   { title: "R.E.M. Monster T-Shirt", manufacturer: "Gildan", artist: "R.E.M.", price: 25.00, type: "t-shirt", id: 23 },
//   { title: "The Clash Sandinista! T-Shirt", manufacturer: "Fruit of the Loom", artist: "The Clash", price: 28.50, type: "t-shirt", id: 24 },
//   { title: "Oasis (What's the Story) Morning Glory? T-Shirt", manufacturer: "Bella + Canvas", artist: "Oasis", price: 24.95, type: "t-shirt", id: 25 },
//   { title: "Radiohead Kid A T-Shirt", manufacturer: "American Apparel", artist: "Radiohead", price: 26.00, type: "t-shirt", id: 26 },
//   { title: "Smashing Pumpkins Siamese Dream T-Shirt", manufacturer: "Hanes", artist: "Smashing Pumpkins", price: 27.50, type: "t-shirt", id: 27 },
//   { title: "Alice in Chains Facelift T-Shirt", manufacturer: "Gildan", artist: "Alice in Chains", price: 25.50, type: "t-shirt", id: 28 },
//   { title: "Soundgarden Badmotorfinger T-Shirt", manufacturer: "Fruit of the Loom", artist: "Soundgarden", price: 24.95, type: "t-shirt", id: 29 },
//   { title: "Tool Lateralus T-Shirt", manufacturer: "Bella + Canvas", artist: "Tool", price: 27.00, type: "t-shirt", id: 30 }
// ];

export default products;