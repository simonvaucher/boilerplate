import React from "react";

class Aggregator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feeds: [] };
  }

  componentDidMount() {
    fetch("/api/feeds")
      .then(res => res.json())
      .then(result => {
        this.setState({ feeds: result.items.slice(0, 2) });
      });
  }

  render() {
    const { feeds } = this.state;

    return (
      <div className="feeds">
        {feeds.map((feed, key) => {
          return (
            <div
              key={key}
              dangerouslySetInnerHTML={{ __html: feed["content:encoded"] }}
            />
          );
        })}
      </div>
    );
  }
}

export default Aggregator;
