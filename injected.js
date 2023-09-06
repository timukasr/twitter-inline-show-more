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


/**
 * @param {TopLevel} jsonData
 */
function extractTweets(jsonData) {
	const instructions = jsonData.data.user?.result.timeline_v2.timeline.instructions || jsonData.data.home?.home_timeline_urt.instructions;

	for (const instruction of instructions) {
		if (instruction.entries) {
			for (const entry of instruction.entries) {
				const content = entry.content;
				if (content.items) {
					for (const entry of content.items) {
						handleResult(entry.item)
					}
				}
				handleResult(entry.content)
			}
		}
	}
}

/**
 *
 * @param {StickyItem|FluffyContent} entry
 */
function handleResult(entry) {
	const result = entry.itemContent?.tweet_results?.result;
	if (!result) {
		return;
	}

	const tweet = result.note_tweet?.note_tweet_results.result;

	if (tweet) {
		tweets[result.rest_id] = tweet;
	}

	const quotedTweetResult = result.legacy?.retweeted_status_result?.result.quoted_status_result?.result;
	const quotedTweet = quotedTweetResult?.note_tweet?.note_tweet_results.result;

	if (quotedTweet) {
		tweets[quotedTweetResult.rest_id] = quotedTweet;
	}

}

function findAndHandleElements() {
	const elements = document.querySelectorAll('[data-testid="tweet-text-show-more-link"]:not([data-processed])');

	for (const element of elements) {
		console.log('found element', element);

		// Mark the element as processed
		element.setAttribute('data-processed', 'true');

		element.addEventListener('click', evt => {
			const url = element.href || element.closest('article').querySelector('a[href*=status]').href;
			const parts = url.split('/');
			const id = parts[parts.length - 1];
			const tweet = tweets[id];

			if (tweet) {
				console.log(id, tweet);
				const classes = element.className;
				const style = element.style.cssText;
				const html = renderTweet(tweet, `class="${classes}" style="${style}"`);
				element.parentElement.innerHTML = html;
				element.remove()
				console.log(html);
				evt.preventDefault();
			} else {
				console.log(id)
			}
		})
	}
}

function renderTweet(data, linkHtml) {
	let html = data.text;

	if (data.richtext) {
		// Add bold formatting based on the richtext_tags
		for (let i = data.richtext.richtext_tags.length - 1; i >= 0; i--) {
			let tag = data.richtext.richtext_tags[i];

			if (tag.richtext_types.includes("Bold")) {
				const before = html.slice(0, tag.from_index);
				let innerText = html.slice(tag.from_index, tag.to_index);
				const after = html.slice(tag.to_index);

				if (tag.richtext_types.includes("Bold")) {
					innerText = `<strong>${innerText}</strong>`;
				}

				if (tag.richtext_types.includes("Italic")) {
					innerText = `<em>${innerText}</em>`;
				}

				html = `${before}${innerText}${after}`;
			}
		}
	}

	if (data.entity_set.user_mentions) {
		for (const mention of data.entity_set.user_mentions) {
			console.log(mention)
			html = html.replaceAll(`@${mention.screen_name}`, `<a href="https://twitter.com/${mention.screen_name}" target="_blank" ${linkHtml}>@${mention.screen_name}</a>`);
		}
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

