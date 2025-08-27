
````markdown
# Digital Bevy Assignment

This project contains two parts:
- **Backend** → `digital-bevy-assignment_BE`
- **Frontend** → `digital-bevy-assignment_FE`

We are using **Node.js LTS**.

---

## 🚀 Backend Setup (digital-bevy-assignment_BE)

1. Navigate to the backend folder:
   ```bash
   cd digital-bevy-assignment_BE
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend folder:

   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   CLIENT_URL=http://localhost:5173
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

Backend will run at: **[http://localhost:5000](http://localhost:5000)**

---

## 💻 Frontend Setup (digital-bevy-assignment\_FE)

1. Navigate to the frontend folder:

   ```bash
   cd digital-bevy-assignment_FE
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend folder:

   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. Start the frontend dev server:

   ```bash
   npm run dev
   ```

Frontend will run at: **[http://localhost:5173](http://localhost:5173)**


