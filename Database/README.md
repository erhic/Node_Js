## DATABASE

### USING MONGODB AS SERVER WITH MONGOOSE AND NODE

This a respitory showing the how to use mongodb ,

## Requirement

Local database system ,mongodb
Installed package ,which is [mongoose] that purpose is to

- is a MongoDB ODM i.e (Object database Modelling) that used to translate the code and its representation from MongoDB to the Node. js server.
- acts as a front end to MongoDB, an open source NoSQL database that uses a document-oriented data model

Steps to follow

1. Install mongoDB Community Database server package from the link >> 'https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/' for ubuntu use or select os option in the website .
2. Install MongoDB Compass , a graphical tool for managing MongoDB databases, enabling easy data exploration and querying.
3. Install mongoose package in the working directory of your project.
4. Connect to database , using the connect function (asynchronous,return a promise, that we can use to return a callback to tell whether connnection is succcessful)

   -- Note: while working with the local database ,path the url ,port with the database you are working on.

5. Create a schema , a structure like object showing the properies and other validations values that the database should expect to store. Use the schema function provide by mongoose.

   -- Note: At the end ,add a timestamp object with true value at the end of the schema function.

6. Create a model , that enable link the connection between the schema and collection we are working with the database.
   Use model function provided by mongoose and takes two arguments , the first one being the collection(as table in sql ) in the database you are working on and the variable name of the schema you have build.
7. Now using the model , one can perform action on the database using node . Action include :

   -- delete: deleteOne ,deleteMany.

   -- insert

   -- find: youy can set the desired result by filtering using function like , sort ,limit and other variations

   -- update: upadateOne ,updateMany
