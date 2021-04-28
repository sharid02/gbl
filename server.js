var express = require("express");
var app = express();
const cors=require('cors')
var formidable = require("express-formidable");
app.use(formidable());

var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectId;

var http = require("http").createServer(app);
var bcrypt = require('bcryptjs');
var fileSystem = require("fs");

var jwt = require("jsonwebtoken");
var accessTokenSecret = "myAccessTokenSecret1234567890";
require('dotenv').config()
app.use(cors())
app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");
var socketIO = require("socket.io")(http);
var socketID = "";
var users = [];



var mainURL = "http://localhost:4000"|| env.process.PORT;
// const uri = "mongodb+srv://test:testS@cluster0.0aziu.mongodb.net/demo?retryWrites=true&w=majority";
const uri="mongodb://localhost:27017"
socketIO.on("connection", function (socket) {
	console.log("User connected", socket.id);
	socketID = socket.id;
});

http.listen(4000||env.process.PORT, function () {
	console.log("Server started at " + mainURL);
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	client.connect(error=>{
		var database = client.db("demo");
		console.log("Database connected.");

	

		app.post("/signup", function (request, result) {
			var name = request.fields.name;
			var username = request.fields.username;
			var email = request.fields.email;
			var password = request.fields.password;
			var birthdate =request.fields.birthdate;
			var reset_token = "";
           console.log(name,username,email,password,birthdate)
			database.collection("users").findOne({
				$or: [{
					"email": email
				}, {
					"username": username
				}]
			}, function (error, user) {
				if (user == null) {
					bcrypt.hash(password, 10, function (error, hash) {
						database.collection("users").insertOne({
							"name": name,
							"username": username,
							"email": email,
							"password": hash,
							"birthdate": birthdate,
							"reset_token": reset_token,
							"profileImage": "",
							"coverPhoto": "",
							"dob": "",
							"city": "",
							"country": "",
							"aboutMe": "",
							"friends": [],
							"pages": [],
							"notifications": [],
							"groups": [],
							"posts": []
						}, function (error, data) {
							result.json({
								"status": "success",
								"message": "Signed up successfully. You can login now."
							});
						});
					});
				} else {
					result.json({
						"status": "error",
						"message": "Email or username already exist."
					});
				}
			});
		});

		

		app.post("/login", function (request, result) {
			var email = request.fields.email;
			var password = request.fields.password;
			database.collection("users").findOne({
				"email": email
			}, function (error, user) {
				if (user == null) {
					result.json({
						"status": "error",
						"message": "Email does not exist"
					});
				} else {
					bcrypt.compare(password, user.password, function (error, isVerify) {
						if (isVerify) {
							var accessToken = jwt.sign({ email: email }, accessTokenSecret);
							database.collection("users").findOneAndUpdate({
								"email": email
							}, {
								$set: {
									"accessToken": accessToken
								}
							}, function (error, data) {
								result.json({
									"status": "success",
									"message": "Login successfully",
									"accessToken": accessToken,
									"profileImage": user.profileImage
								});
							});
						} else {
							result.json({
								"status": "error",
								"message": " Email or Password  is not correct"
							});
						}
					});
				}
			});
		});

	

		app.post("/getUser", function (request, result) {
			var accessToken = request.fields.accessToken;
			
			database.collection("users").findOne({
				"accessToken": accessToken
			}, function (error, user) {
				if (user == null) {
					result.json({
						"status": "error",
						"message": "User has been logged out. Please login again."
					});
				} else {
					result.json({
						"status": "success",
						"message": "Record has been fetched.",
						"data": user
					});
				}
			});
		});

		
		app.post("/addPost", function (request, result) {

			var accessToken = request.fields.accessToken;
			var caption = request.fields.caption;
			var image = "";
			var video = "";
			var type = request.fields.type;
			var createdAt = new Date().getTime();
			var _id = request.fields._id;

			database.collection("users").findOne({
				"accessToken": accessToken
			}, function (error, user) {
				if (user == null) {
					result.json({
						"status": "error",
						"message": "User has been logged out. Please login again."
					});
				} else {
                    //   console.log(request.files?.image.size)
					if(request.fields.image!==""){
						if (request.files.image.size > 0 && request.files.image.type.includes("image")) {
							image = "public/images/" + new Date().getTime() + "-" + request.files.image.name;
	
							// Read the file
							fileSystem.readFile(request.files.image.path, function (err, data) {
								if (err) throw err;
								console.log('File read!');
	
								// Write the file
								fileSystem.writeFile(image, data, function (err) {
									if (err) throw err;
									console.log('File written!');
								});
	
								// Delete the file
								fileSystem.unlink(request.files.image.path, function (err) {
									if (err) throw err;
									console.log('File deleted!');
								});
							});
						}
					}

					if(request.fields.video !==""){
						if (request.files.video.size > 0 && request.files.video.type.includes("video")) {
							video = "public/videos/" + new Date().getTime() + "-" + request.files.video.name;
							
							// Read the file
							fileSystem.readFile(request.files.video.path, function (err, data) {
								if (err) throw err;
								console.log('File read!');
	
								// Write the file
								fileSystem.writeFile(video, data, function (err) {
									if (err) throw err;
									console.log('File written!');
								});
	
								// Delete the file
								fileSystem.unlink(request.files.video.path, function (err) {
									if (err) throw err;
									console.log('File deleted!');
								});
							});
						}
					}

					database.collection("posts").insertOne({
						"caption": caption,
						"image": image,
						"video": video,
						"type": type,
						"createdAt": createdAt,
						"likers": [],
						"comments": [],
						"shares": [],
						"user": {
							"_id": user._id,
							"name": user.name,
							"username": user.username,
							"profileImage": user.profileImage
						}
					}, function (error, data) {

						database.collection("users").updateOne({
							"accessToken": accessToken
						}, {
							$push: {
								"posts": {
									"_id": data.insertedId,
									"caption": caption,
									"image": image,
									"video": video,
									"type": type,
									"createdAt": createdAt,
									"likers": [],
									"comments": [],
									"shares": []
								}
							}
						}, function (error, data) {

							result.json({
								"status": "success",
								"message": "Post has been uploaded."
							});
						});
					});
				}
			});
		});

		app.post("/getNewsfeed", function (request, result) {
			var accessToken = request.fields.accessToken;
			database.collection("users").findOne({
				"accessToken": accessToken
			}, function (error, user) {
				if (user == null) {
					result.json({
						"status": "error",
						"message": "User has been logged out. Please login again."
					});
				} else {

					var ids = [];
					ids.push(user._id);

					database.collection("posts")
					.find({
						"user._id": {
							$in: ids
						}
					})
					.sort({
						"createdAt": -1
					})
					.limit(5)
					.toArray(function (error, data) {

						result.json({
							"status": "success",
							"message": "Record has been fetched",
							"data": data
						});
					});
				}
			});
		});

		

		

		

		

	});
});