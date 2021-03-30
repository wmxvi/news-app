import React, { useState, useEffect } from 'react';

import useStyles from './style/Article';
import Article from './Article';

const Articles = ({...props}) => {
    const classes = useStyles({...props})

    const [articles, setArticles] = useState([]); // Articles from data source
    const [displayArticles, setDisplayArticles] = useState([]); // Articles to display
    const [isLoading, setIsLoading] = useState(true);

    // Main fetch articles hook
    // @todo: Move to service

    useEffect(() => {
        fetch(
          `http://localhost:7000/api/articles`,
          {
            method: "GET"
          }
        )
          .then(res => res.json())
          .then(response => {
            setArticles(response);
            setDisplayArticles(response);
            setIsLoading(false);
          })
          .catch(error => console.log(error));
    }, []);

    // Apply any search terms that exist

    useEffect(() => {
        // Filter out original data and assign to display
        setDisplayArticles(articles.filter((article: any) => {
          return (article.title.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !== -1);
        }));

    }, [props.searchTerm]);

    return (
        <div className={classes.base}>
            {isLoading && <p className={classes.loading}>Loading articles...</p>}
            
            {displayArticles.map((article, index) => {
              return (
                <Article key={index} data={article} />
              );
            })}
        </div>
    );
}

export default Articles;