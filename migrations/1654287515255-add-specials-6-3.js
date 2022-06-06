"use strict";
const specials = require("../fixtures/specials_6_3");

const { MongoClient } = require("mongodb");

const URL = "mongodb+srv://riantao:Realpimp69*!@husky-proficient.pxmcv.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(URL);

module.exports.up = async () => {
  await client.connect();

  const db = client.db("test");

  const specialsCollection = db.collection("specials");

  try {
    await specialsCollection.insertMany(specials);
  } catch (e){
    console.error(e);
  } finally {
    client.close();
  }
}

module.exports.down = async () => {

}
