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
