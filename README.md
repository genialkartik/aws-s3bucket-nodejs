## AWS S3 Buckets
1. About S3 Buckets
Amazon Simple Storage Service is storage for the Internet. It is designed to make web-scale computing easier for developers. 
Amazon S3 has a simple web services interface that you can use to store and retrieve any amount of data, at any time, from anywhere on the web. It gives any developer access to the same highly scalable, reliable, fast, inexpensive data storage infrastructure that Amazon uses to run its own global network of web sites. The service aims to maximize benefits of scale and to pass those benefits on to developers. Read more...
- AWS
We will go through all the process of using a S3 with NodeJS, from creating the S3 Bucket and access credentials to actually use the bucket.
2. Prerequisite:
First, you need to know how a few concepts:
1. S3 Bucket: is a storage unit from the S3 service from Amazon. You can store different type of files (data) and have metadata that describes the actual data or file.
2. Access Key ID: Is the identification for a certain access key that allows an application or user to access a set of preconfigured AWS Resource (like a S3 Bucket for example).
3. Secret Access key: Is the secret part of the Access Key ID. Think of it as a password for a specific Access Key ID (they must be used always in pairs)
Now that we understand all of this concepts, we must configure the Amazon Console before start coding.
Step 1: Get your key pairs
Go to the top bar and click your user account. Then, click in “My security credentials” and “Access keys”, finally, click “Create New Access Key”.
Click in “Show access key” to see both of the keys. Copy and store them in a secure place. We will use them later.
Step 2: Create a Bucket
Go to “Services/Storage/S3” and then click in “Create Bucket”.

Then, fill the information required in the form. The bucket name must be unique, so be creative :)

For this example we are leaving the properties and permissions with the default values.

Click next, next, next and you will have the bucket created.

we will need to identificate the bucket is with the “Bucket name” (in this case is “creative-bucket-name-6355123”).
Step 3: Clone Github Repo
Clone demo repo from Github:
>> git clone https://github.com/genialkartik/aws-s3bucket-nodejs.git .
It’ll create a new directory named ‘aws-s3bucket-nodejs’.
Now, go to above directory.
>> cd aws-s3bucket-nodejs
Step 4: Creating a Node JS project for uploading, deleting and listing
Creating a nodejs project is very easy if you’re familiar with node.js structure. I’ll try to keep it simple if you’re new to node.js env. Just follow the below steps:
Install node, npm in your local machine:
>> sudo apt-get update
>> sudo apt-get install nodejs
>> sudo apt-get install nodejs-legacy
>> sudo apt-get install build-essential
>> sudo apt-get install npm
A new directory will be created named ‘node_modules’ .

3. Install all required dependencies, mentioned in package.json:
>> npm install

By now, you’ve successfully created a project to upload files in S3 Bucket. Go through the codes and let me know if you need any assistance. Check whether your file are arranged in the same way as shown in below image.



4. Following are the files and code, which you need to know about specifically.
a. /routers/test.js


5. go to /api/test.js and change access key, secret key and bucket name

6. Run:
>> npm start
You should get a message in console ‘listen to port: 3000’. Now to any browser, insert ‘https://localhost:3000’ and hit enter. If every thing goes well you should get a home page with a form to upload file. Now upload the file and then, check in you S3 Bucket AWS.
Tada!! you did it!
Meanwhile, if you find any difficulty in understanding the code, do let me know or open an issue here: https://github.com/genialkartik/aws-s3bucket-nodejs/issues 
Conclusion
Phew!! that was a lot to understand for the day. I hope you loved it and successfully launched your website using AWS EC2 instance and also CRD (Create, Read and Deleted) the files through and fro  AWS S3 Bucket.
If really like it or it may proved helpful to you anyhow, you are welcome to continue looking around on [kartiktyagi.me](https://kartiktyagi.me) and read even more exciting articles. You are welcome to write any unsettled questions in the issue! :)
