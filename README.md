## [Trump Twitter Tracker Web](https://el-dringo-brannde.github.io/Trump-Twitter-Tracker-Web/)



## Summary
A React Redux site to parse data from the server to provide some data visualization for Trumps Tweets. Wordcloud that aggregates his most commonly used words, sunburst charts to categorize each word via noun, adjective, adverb, and verb. Finally, a heatmap to track at what times he posts the tweets, and average them throughout the week.
   

Deployed via Github Pages [here](https://el-dringo-brannde.github.io/Trump-Twitter-Tracker-Web/)


### _Note_
Used this project to learn Redux, as of now Redux is **Completely overkill** and adds a lot of tech debt to the project. 

## How to Use
1. Install dependencies `yarn` 
2. Start project locally with ` yarn start`

## To Do 
1. Add line chart to track Trump tweet times 
2. Add area range chart to track Trump tweet times
3. ~~Add ability to query time limits for sunburst and wordcloud~~
4. ~~Filter by word types for wordcloud~~
5. Add home/about page. 
6. Pull Trumps last tweet on home page.  

## Related Projects
1. [Trump Twitter Tracker ETL](https://github.com/El-Dringo-Brannde/trump-twitter-tracker-ETL) ETL engine used to pull trump tweets by nouns, adverbs, adjectives, and verbs. Further breaks them down by year, month, and week. 

2. [Trump Twitter Tracker Server](https://github.com/El-Dringo-Brannde/trump-twitter-tracker-server) A Node.js, Express RESTful server to serve up database data from the ETL engine. Specifically, pulls trumps tweets and parses through it properly to server it back to the web project.