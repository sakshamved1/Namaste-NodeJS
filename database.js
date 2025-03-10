const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://gardneresbillyer:gardneresbillyers@nnode.50njf.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...

  const data = {
    firstname: "Ranveer",
    lastname: "singh",
    city: "mumbai",
    phone: "928635435267",
  };

  //Insert Many
  // const insertResult = await collection.insertMany([data]);
  // console.log('Inserted documents =>', insertResult);

  //Insert One
//   const insertResult = await collection.insertOne(data);
//   console.log('Inserted documents =>', insertResult);

  //read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // //update
//   const updateResult = await collection.updateOne(
//     { lastname: "saini" },
//     { $set: { lastname: "sen" } }
//   );
//   console.log("Updated documents =>", updateResult);

  ///remove
  // const deleteResult = await collection.deleteMany({ lastname: "saini" });
  // console.log('Deleted documents =>', deleteResult);

  //count
//   const count = await collection.find({}).count();
//   console.log("Number of document is: ", count);
  
  




  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// #  Notes
// Create mongoDb Account & Create Cluster & register username & pass
// Get the connnection string
// Install mongoDb compass & Use  connection string to connect to DB
// Create a database
// install Mongodb packages
// create a connnection from code
// CRUD -  create,read, update, delete
