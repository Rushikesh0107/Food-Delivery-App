# 🍔 Food Delivery Application

A full-featured food delivery web application built using the **MERN stack**. It allows users to browse restaurants, view menus, place orders, and track deliveries. Admins can manage restaurants, menu items, and monitor order statuses.

---

## 🚀 Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **File Uploads**: Multer + Cloudinary
- **Payments**: Stripe (optional)

---

## ✨ Features

### 👥 User Features
- User registration & login
- Browse restaurants and menus
- Add items to cart
- Place orders with delivery address
- View order history
- Track order status in real-time

### 🛠️ Admin Features
- Secure admin login
- Add/edit/delete restaurants
- Manage menu items for each restaurant
- Manage and update order statuses

---

## 🖼️ Screenshots

> *(Add screenshots or demo GIFs here to showcase the UI and functionality)*

---

## ⚙️ Getting Started

### 📁 Clone the repository
```bash
git clone https://github.com/your-username/mern-food-delivery-app.git
cd mern-food-delivery-app
````

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret (optional)
```

Start the backend server:

```bash
npm run dev
```

---

## 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs the app in development mode. Open `http://localhost:3000` to view it in the browser.

---

## 📂 Folder Structure

```
mern-food-delivery-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       └── App.js
```

---

## 🧪 Testing

* Backend API testing using Postman
* Frontend testing with Jest and React Testing Library (optional)

---

## 📦 Deployment

* **Frontend**: Vercel
* **Backend**: Render
* **Database**: MongoDB Atlas

Make sure to configure environment variables in your deployment dashboard for secure access.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

Made with ❤️ by **Rushikesh**

---

## 📬 Feedback

If you have any feedback or suggestions, feel free to open an issue or contact me via GitHub.

```

---

Let me know if you want this exported as a downloadable `.md` file or need help customizing it further based on your exact features.
```
