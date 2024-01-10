# File Hosting Server

It is a simple File hosting server built with ExpressJS for uploading and displaying images.

## Start

1. Clone repository:

```bash
git clone https://github.com/ArifzynXD/uploader.git
cd uploader
```

2. Install dependensi:

```bash
npm install
```

3. Run the server:

```bash
npm start
```

4 Open a browser and visit http://localhost:3000 to access the application. ```

## API Endpoints

- **Upload Image:**

  Endpoint: `POST /api/upload`

  Description: Upload a single image. Make sure to use the `file` field when submitting the form.

- **Access Uploaded Image:**

  Endpoint: `GET /file/:filename`

  Description: Uploaded images can be accessed by adding the file name at the end of the URL.

  Example: [http://localhost:3000/file/filename.jpg](http://localhost:3000/file/filename.jpg)
  
## Technologies Used

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **ExpressJS:** A web application framework for Node.js, designed for building web and API applications.
- **Multer:** A middleware for handling multipart/form-data, used for file uploads in Node.js applications.

## Donation

If you find Sewaria helpful and would like to support its development, consider making a donation. Your contribution helps maintain and improve the project.

- **[Donate with Saweria](https://saweria.co/Arifzyn)**
- **[Donate with QR Code (Saweria)](https://shorturl.at/ACSWY)**

Your generosity is greatly appreciated! Thank you for supporting Sewaria.