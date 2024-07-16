# How to Run the News API Script

## Prerequisites

- Before running the script, ensure you have Node.js installed on your machine.
- [Link download](https://nodejs.org/en)

## Run the Script

1.  Clone the Repository

```bash
git clone 
cd repository-name
```

2. Install Dependencies

```bash
npm install axios
Update API Key
```

3. Run the Script

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
