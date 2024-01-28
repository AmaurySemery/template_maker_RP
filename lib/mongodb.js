const { MongoClient } = require("mongodb");

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // En mode développement, utilisez une variable globale pour que la valeur
  // soit préservée entre les rechargements de module provoqués par HMR (Hot Module Replacement).
  let globalWithMongo = global;

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // En mode production, il est préférable de ne pas utiliser de variable globale.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exportez une promesse MongoClient à portée de module. En faisant cela dans un
// module séparé, le client peut être partagé entre les fonctions.
module.exports = clientPromise;
