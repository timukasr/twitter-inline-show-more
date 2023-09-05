window.tweets = {};
let oldXHROpen = window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open = function (method, url) {
	this.addEventListener("load", function () {
		if (url.includes('HomeTimeline') || url.includes('UserTweets')) {
			const responseBody = this.responseText;
			const jsonData = JSON.parse(responseBody);

			try {
				extractTweets(jsonData);
			} catch (e) {
				console.log('failed to parse')
				console.log(e)
				console.log(jsonData)
			}
		}
	});
	return oldXHROpen.apply(this, arguments);
};

function extractTweets(jsonData) {
	const instructions = jsonData.data.user.result.timeline_v2.timeline.instructions;

	for (const instruction of instructions) {
		if (instruction.type !== 'TimelineAddEntries') {
			continue;
		}

		for (const entry of instruction.entries) {
			if (!entry.entryId.startsWith('tweet')) {
				continue;
			}
			try {
				const tweet = entry.content.itemContent.tweet_results.result.note_tweet.note_tweet_results.result;
				tweets[entry.entryId.slice(6)] = tweet;
			} catch (e) {
				console.log('failed to parse2')
				console.log(e)
				console.log(entry)
			}
		}
	}
}

function findAndHandleElements() {
	const elements = document.querySelectorAll('[data-testid="tweet-text-show-more-link"]:not([data-processed])');

	for (const element of elements) {
		console.log('found element', element);

		// Mark the element as processed
		element.setAttribute('data-processed', 'true');

		element.addEventListener('click', evt => {
			const url = element.closest('article').querySelector('a[href*=status]').href;
			const parts = url.split('/');
			const id = parts[parts.length - 1];
			const tweet = tweets[id];

			if (tweet) {
				console.log(id, tweet);
				const classes = element.className;
				const style = element.style.cssText;
				const html = renderTweet(tweet, `class="${classes}" style="${style}"`);
				element.previousSibling.innerHTML = html;
				element.remove()
				console.log(html);
				evt.preventDefault();

			}
		})
	}
}

function renderTweet(data, linkHtml) {
	let html = data.text;

	// Add bold formatting based on the richtext_tags
	for (let tag of data.richtext.richtext_tags) {
		if (tag.richtext_types.includes("Bold")) {
			const before = html.slice(0, tag.from_index);
			const boldText = html.slice(tag.from_index, tag.to_index);
			const after = html.slice(tag.to_index);
			html = `${before}<strong>${boldText}</strong>${after}`;
		}
		// Add other formatting here as needed
	}

	// Replace URLs with actual hyperlinks
	for (let url of data.entity_set.urls) {
		html = html.replace(url.url, `<a href="${url.expanded_url}" target="_blank" ${linkHtml}>${url.display_url}</a>`);
	}

	return html;
}

const observer = new MutationObserver((mutationsList, observer) => {
	for (const mutation of mutationsList) {
		if (mutation.type === 'childList' || mutation.type === 'subtree') {
			findAndHandleElements();
		}
	}
});

// observer.observe(document.body, {childList: true, subtree: true});

observer.observe(document.body, {childList: true, subtree: true});

