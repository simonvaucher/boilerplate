import React from "react";

/**
 * Oldskool example => proper class with componentDidMound and state update
 */
class Aggregator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feeds: [], initialState: true };
  }

  componentDidMount() {
    fetch("/api/feeds")
      .then(res => res.json())
      .then(result => {
        this.setState({
          initialState: false,
          result,
        });
      });
  }

  render() {
    const { result, initialState } = this.state;

    if (initialState) {
      return <div>💤 Fetching RSS feeds… 💤</div>;
    }

    return (
      <div className="content">
        <h5>
          <a href={result.link}>{result.title}</a>
        </h5>
        {result.items.slice(0, 2).map((feed, key) => {
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
    );
  }
}

export default Aggregator;
