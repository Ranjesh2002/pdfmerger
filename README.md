# PDF Merger

PDF Merger is a simple web application that allows users to merge two PDF files into one. The application is built using Node.js, Express, and the `pdf-merger-js` library.

## Project Structure

- `index.html`: The main HTML file for the web interface.
- `merge.js`: Contains the logic for merging PDF files.
- `package.json`: Contains the project metadata and dependencies.
- `public/`: Directory for serving static files.
- `server.js`: The main server file.
- `uploads/`: Directory for storing uploaded PDF files.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd pdfmerger
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Use the web interface to upload two PDF files and merge them.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [Multer](https://www.npmjs.com/package/multer): Middleware for handling `multipart/form-data`, which is primarily used for uploading files.
- [pdf-merger-js](https://www.npmjs.com/package/pdf-merger-js): A simple library to merge PDF files.

## License

This project is licensed under the ISC License.
