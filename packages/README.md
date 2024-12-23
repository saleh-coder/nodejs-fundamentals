# Node.js Projects in the `packages/` Folder

This folder contains multiple Node.js projects, each configured to work with both **npm** and **yarn**. The setup is organized into distinct directories, with shared configurations and dependencies under `about-package-json`.

## 📁 Directory Structure

```
packages/
├── about-package-json/  # Configuration files for npm and yarn
├── project_1/           # Simple web server showing current time in various cities
├── project_2/           # Scrapes quotes and saves them to a file
└── project_3/           # CLI program to manage user data
```

### 🗂 **about-package-json**

The `about-package-json` folder contains configuration files for **npm** and **yarn** package managers, including dependencies and lock files.

- **npm**:

  - Uses **npm** as the package manager.
  - Dependencies are listed in `npm/package.json`.
  - Lock files are managed with **npm** in `npm/package-lock.json`.

- **yarn**:
  - Uses **yarn** as the package manager.
  - Dependencies are listed in `yarn/package.json`.
  - Lock files are managed with **yarn** in `yarn/yarn.lock`.

Common dependencies like `node-emoji`, `chalk`, and others are used across the configurations.

### 🗂 **project_1**

**Project 1** is a simple web server application that displays the current time in various cities based on their time zones.

- **Dependencies**:

  - `chalk`: For colorizing console output.
  - `luxon`: For handling and formatting date and time.
  - `server`: A simple HTTP server library.

- **Usage**:
  - The server runs on port `8080`. You can access different routes such as `/roma`, `/luanda`, `/seoul`, and `/cuiaba` to get the current time in those cities.

For implementation details, refer to the `index.js` file in the `project_1` directory.

### 🗂 **project_2**

**Project 2** scrapes quotes or thoughts from the internet based on an author's name and saves them to a file.

- **Dependencies**:

  - `pensador-scrap`: A library to scrape quotes.
  - `fs`: For file operations to store scraped quotes.

- **Usage**:
  - The script fetches thoughts by **Alan Turing** and saves them in `phrases.txt`.
  - You can change the author name or modify the script to fetch quotes from other authors.

For implementation details, check the `index.js` file in the `project_2` directory.

### 🗂 **project_3**

**Project 3** is a command-line interface (CLI) program to manage user data with operations like adding, editing, deleting, and viewing user information. The data is stored in `bank.json`.

- **Dependencies**:

  - `terminal-kit`: For interactive CLI menus.
  - `uuid`: For generating unique user IDs.

- **Usage**:
  - Users can interact with the program via a menu system to manage user data.

For full instructions and code, refer to the `index.js` file in the `project_3` directory.

## 🚀 How to Use

1. **Install Dependencies**:
   Choose either **npm** or **yarn** and install the necessary packages.

   ```bash
   # Using npm
   npm install
   # or using yarn
   yarn install
   ```

2. **Run the Projects**:
   Navigate to the specific project folder (e.g., `project_1`).

   - For `project_1`, use the following command to run the server:

     ```bash
     node index.js
     ```

   - For `project_2`, run the script that scrapes quotes:

     ```bash
     node index.js
     ```

   - For `project_3`, the CLI program allows you to interact with user data. Start the program with:

     ```bash
     node index.js
     ```

   After running the command for `project_3`, follow the on-screen prompts to manage user data.

## 📄 License

This folder is part of the **Node.js Fundamentals** project and is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

```

Com este código, você tem o **README.md** completo, pronto para ser usado em seu projeto, sem partes faltando ou fragmentadas.
```
