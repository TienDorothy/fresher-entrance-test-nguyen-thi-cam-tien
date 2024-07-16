# How to Run Code

## Prerequisites

- Before running the script, ensure you have Node.js installed on your machine.
- [Link download](https://nodejs.org/en)

## Clone repository

```bash
git clone https://github.com/TienDorothy/fresher-entrance-test-nguyen-thi-cam-tien.git
```

```bash
cd fresher-entrance-test-nguyen-thi-cam-tien/
```

## Part 1 and Part 2

**Running the JavaScript file using Terminal or PowerShell**

- Navigate to your project.

```bash
cd [folder_name]
node [file_javascript]
```

Examples: Run `problem1.js` in `part1`

```bash
cd part1
node problem1.js
```

**Running the JavaScript File in Visual Studio Code (VSCode)**

- Open VSCode and navigate to your project.
- Open the integrated terminal (Terminal > New Terminal) or use PowerShell.
- Navigate to the directory containing your JavaScript file.

**Run the file using the command:**

```bash
node [your_file.js]
```

- Alternatively, use the "Run Code" button in the editor.

## Part 3: Dynamic HTML Page

To run the project, follow these steps:

1. **Open index.html File:**
   - Double-click the index.html file.
   - Alternatively, drag the index.html file into an open web browser window.
2. **Usage:**
   - Once opened, the form will be displayed.
   - Fill in the form fields and click the submit button.
   - The input values will be displayed on the same page.
   - The background color of the page will change to the selected favorite color.

## Part 4 : Custom API Request

1.**Install Dependencies**

```bash
cd part4
npm install
```

2. **Run the Script**

Execute the script using Node.js:

```bash
node CustomAPIRequest.js
```

OR:

```bash
npm start
```

## Assumptions

- The script assumes that you have a valid API key from [News API](https://newsapi.org/) . If not, sign up at News API to obtain your API key.
- It assumes a stable internet connection for making the API request.
- It assumes the API key provided is correct and has access to the requested data (in this case, top headlines from TechCrunch).

## Notes

- The script will display the author, title, description, and URL of each article retrieved.
- If there are no articles returned, it will display "No data available".

## Troubleshooting

- If you encounter issues, ensure your API key is correctly configured and has the necessary permissions.
