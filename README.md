# forsit-ecommerce

### **[LIVE DEMO](https://forsit-ecommerce-frontend.vercel.app/)**

# Setup Project on Local Machine

### 1. Clone Repo to your Machine/Computer

```
git clone https://github.com/joharkhan99/forsit-ecommerce.git
```

### 2. Backend setup

- cd/go into backend folder and run below command
  ```
  npm install
  ```
- create ```.env``` file in backend folder and add below variables for cloudinary media storage and mongodb database
  
  ```
  MONGO_URI=mongodb+srv://<username>:<password>@cluster0.jfvpwub.mongodb.net/?retryWrites=true&w=majority
  PORT=8000
  CLOUDINARY_NAME=get this from cloudinary free account dashboard
  CLOUDINARY_KEY=get this from cloudinary free account dashboard
  CLOUDINARY_SECRET=get this from cloudinary free account dashboard```

- finally run below
  ```
  npm start
  ```

### 3. Frontend setup

cd/go into frontend folder and run below commands one by one

```
npm install
```

```
npm run serve
```
