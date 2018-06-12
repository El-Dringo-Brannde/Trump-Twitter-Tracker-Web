## [Trump Twitter Tracker Web](https://trump-twitter-tracker-web.herokuapp.com/#/all)



## Summary
A React Redux site to parse data from the server to provide some data visualization for Trumps Tweets. Wordcloud that aggregates his most commonly used words, sunburst charts to categorize each word via noun, adjective, adverb, and verb. Finally, a heatmap to track at what times he posts the tweets, and average them throughout the week.
   

Deployed via Github Pages [here](https://trump-twitter-tracker-web.herokuapp.com/#/all)


### _Note_
Used this project to learn Redux, as of now Redux is **Completely overkill** and adds a lot of tech debt to the project.  

## Related Projects
1. [Trump Twitter Tracker ETL](https://github.com/El-Dringo-Brannde/trump-twitter-tracker-ETL) ETL engine used to pull trump tweets by nouns, adverbs, adjectives, and verbs. Further breaks them down by year, month, and week. 

2. [Trump Twitter Tracker Server](https://github.com/El-Dringo-Brannde/trump-twitter-tracker-server) A Node.js, Express RESTful server to serve up database data from the ETL engine. Specifically, pulls trumps tweets and parses through it properly to server it back to the web project.
