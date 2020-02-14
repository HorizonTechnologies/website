MonogoDB is one of the popular databases in the market. It is a document based NoSQL database. In this simple blog, I would like to explain how I set up mongodb on my Redhat linux VM on AWS.

The [reference](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/) from mongodb official website is a good starting point.
![mongodb setup on Redhat Linux on AWS virtual machine](/blog-images/setting-up-mongodb.jpg)
We need to first setup a firewall for the VM. It is done using Security Group. We can also set up firewall on the database level, which I feel makes things too complex (for not much gain). However, we do need to setup authentication (password) and authorization (roles) on the database. The diagram above explains how I set up mongodb. I was using [PyMongo](https://api.mongodb.com/python/current/#overview) to connect to the db.

Lets go over some of the errors which I encountered:

```
pymongo.errors.ServerSelectionTimeoutError: [Errno 61] Connection refused
```

It means your client is not allowed to talk to mongodb. Check your database level firerwall settings.

```
pymongo.errors.ServerSelectionTimeoutError: timed out
```

This means you are not able to talk to the server itself. Its a security group related issue.

```
pymongo.errors.OperationFailure: command count requires authentication
```

If you get that error which means you are not providing authentication or its wrong
