//Mongodb Crud Exercise this file not necessary for project 
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

//Connect Db
// mongoose.connect('mongodb://localhost/pcat-testdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//create schema
// const PhotoSchema = new Schema({
//   title: String,
//   description: String,
// });

// const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//   title: 'Photo title 2',
//   description: 'Photo desc lorem ipsum 2',
// });
//read data
// Photo.find({},(err,data) =>{
//     console.log(data)
// })

//update data
// const id = '619beb6ac1fed822d0dd6462';
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo 1',
//     description: 'Photo updated',
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete a photo

// const id = "619beb6ac1fed822d0dd6462"
// Photo.findByIdAndDelete(id, (err,data) =>{
//     console.log('Photo is removed ...')
// })