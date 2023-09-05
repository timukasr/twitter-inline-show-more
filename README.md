# X / Twitter Show More Chrome extension

This is a Chrome extension, that modifies behavior of "Show more" button in long posts in X. Default behavior is to open
tweet, but this is slow and disrupts browsing. This extension renders whole tweet inline when "Show more" is clicked.

## TODO

- [ ] Add support for italic styles
- [ ] Add support for links
- [ ] Add support for media
- [ ] Test different Display color and Dark themes
- [ ] Add support in home view
- [ ] Add support in sub tweets/threads
- [ ] Testing
- [ ] Deploy to Chrome Web Store
- [x] Add support for bold styles
- [x] Add support in user view

## How does it work

Extension inject JavaScript script to the page.

First it patches XMLHttpRequest so that it can intercept HTTP responses and acquires full tweet content. Although X only
shows beginning of long tweets by default, it loads whole tweet content. To avoid extra HTTP requests, extension just
stores these tweets for future use. This part might break, if X changes its internal API.

Secondly, it detects "Show more" links inside tweets and replaces its behavior. When clicked, it retrieves the
previously stored tweet content and renders the full tweet. Currently, the renderer is custom and it tries to mimic X's
design. It is possible, that output will differ when X changes their API, design or inline styling of tweets.

## Glossary

* X - platform formerly known as Twitter
* post - tweet
