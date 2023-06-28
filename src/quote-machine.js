import React from "react";
import quotes from "./quotes-list";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return {
    quote: quotes[randomIndex].quote,
    person: quotes[randomIndex].person,
  };
}

let randomQuote = getRandomQuote();

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: randomQuote.quote,
      author: randomQuote.person,
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }
  handleNewQuote() {
    randomQuote = getRandomQuote();
    this.setState({
      text: randomQuote.quote,
      author: randomQuote.person,
    });
  }
  handleTweet(event) {
    event.preventDefault();
    const twitterBaseUrl = "https://twitter.com/intent/tweet";
    const quote = `"${this.state.text}" ~ ${this.state.author}`;
    const tweetText = encodeURIComponent(quote);
    const tweetUrl = `${twitterBaseUrl}?text=${tweetText}`;
    window.open(tweetUrl, "_blank");
  }
  render() {
    return (
      <div id="quote-box">
        <div id="quote-text">
          <q>
            <span id="text">{this.state.text}</span>
          </q>
        </div>
        <div id="quote-author">
          - <span id="author">{this.state.author}</span>
        </div>
        <div id="buttons">
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleTweet}
          >
            <i class="fa-brands fa-square-twitter"></i>
          </a>
          <button id="new-quote" onClick={this.handleNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
