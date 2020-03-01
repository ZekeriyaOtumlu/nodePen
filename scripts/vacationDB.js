const mongoose = require("mongoose");

const db = require("../models");

// This file empties the Vacations collection and inserts the Vacations below
mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/Vacations"
);

const bestVacation = [{
  authors: ["Suzanne Collins"],
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
  image: "http://vacations.google.com/vacations/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  link: "http://vacations.google.com/vacations?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
  title: "The Hunger Games"
}]

db.Vacation
   .remove({})
   .then(() => db.Vacation.collection.insertMany(bestVacation))
   .then(data => {
       console.log(data.result.n + "inserted your records");
       process.exit(0);
   })
   .catch(err => {
       console.error(err);
       process.exit(1);
   })