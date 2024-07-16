// Data From: https://newsapi.org/
const axios = require('axios');

const apiKey = '0da1f335c60d44b99fd2acc2c6d7cd66';
const source = 'techcrunch';

const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;

axios
  .get(url)
  .then(response => {
    // Handle the response
    if (response.status === 200) {
      const totalResults = response.data.totalResults;
      const articles = response.data.articles;

      console.log(
        totalResults > 0
          ? `Top ${totalResults} headlines from ${source.toUpperCase()}:`
          : `No data available`
      );
      console.log();

      articles.forEach(article => {
        console.log(`Author: ${article.author}`);
        console.log(`Title: ${article.title}`);
        console.log(`Description: ${article.description}`);
        console.log(`URL: ${article.url}`);
        console.log();
      });
    }
  })
  .catch(error => {
    if (error.response.status === 401) {
      console.log('Unauthorized check your apiKey: ', apiKey);
    } else console.error('Error fetching news:', error);
  });
