import React, { useState, useEffect } from "react";

const loadingMessage = <div>💤 Fetching RSS feeds… 💤</div>;
const errorMessage = error => <div>{JSON.stringify(error)}</div>;

const Aggregator = () => {
  const [isLoading, setLoading] = useState(true);
  const [responseError, setErrors] = useState(false);
  const [feeds, setFeeds] = useState({});

  function fetchFeeds() {
    fetch("/api/feeds")
      .then(result => {
        if (!result.ok) throw result;
        return result.json();
      })
      .then(result => {
        setLoading(false);
        setFeeds(result);
      })
      .catch(error => {
        window.foo = error;
        setErrors(error);
      });
  }

  useEffect(() => {
    fetchFeeds();
  }, []);

  return (
    <div>
      {isLoading && loadingMessage}
      {responseError && errorMessage(responseError)}
      <div className="content">
        <h5>
          <a href={feeds.link}>{feeds.title}</a>
        </h5>
        {feeds.items &&
          feeds.items.slice(0, 2).map((feed, key) => {
            return (
              <div key={key}>
                <h4>
                  <a href={feed.link}>{feed.title}</a>
                </h4>
                <div
                  dangerouslySetInnerHTML={{ __html: feed["content:encoded"] }}
                />
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Aggregator;
