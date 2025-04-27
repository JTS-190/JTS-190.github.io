fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const newsList = document.getElementById('news-list');
    
    newsList.innerHTML = '';

    if (data.results && data.results.length > 0) {
      const charityArticles = data.results.filter(article => {
        return article.title.toLowerCase().includes('charity') || 
               article.title.toLowerCase().includes('volunteer') || 
               article.title.toLowerCase().includes('fundraising') || 
               article.title.toLowerCase().includes('nonprofit') || 
               (article.description && article.description.toLowerCase().includes('charity'));
      });

      if (charityArticles.length > 0) {
        charityArticles.slice(0, 5).forEach(article => { 
          const listItem = document.createElement('li');
          listItem.className = 'news-article';
          listItem.innerHTML = `
            <div class="news-title">${article.title}</div>
            <div class="news-description">${article.description || 'No description available.'}</div>
            <a class="news-link" href="${article.link}" target="_blank">Read more</a>
          `;
          newsList.appendChild(listItem);
        });
      } else {
        newsList.innerHTML = '<li>No charity news available at the moment.</li>';
      }
    } else {
      newsList.innerHTML = '<li>No charity news available at the moment.</li>';
    }
  })
  .catch(error => {
    const newsSection = document.getElementById('news-section');
    newsSection.innerHTML = '<p>Unable to load news at the moment. Please try again later.</p>';
    console.error('Error fetching news:', error);
  });
