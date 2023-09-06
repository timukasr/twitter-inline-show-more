export interface TopLevel {
	data: Data;
}

export interface Data {
	home?: Home;
	user?: User;
}

export interface Home {
	home_timeline_urt: HomeTimelineUrt;
}

export interface HomeTimelineUrt {
	instructions: HomeTimelineUrtInstruction[];
	responseObjects: ResponseObjects;
	metadata: HomeTimelineUrtMetadata;
}

export interface HomeTimelineUrtInstruction {
	type: string;
	entries: PurpleEntry[];
}

export interface PurpleEntry {
	entryId: string;
	sortIndex: string;
	content: PurpleContent;
}

export interface PurpleContent {
	entryType: EntryTypeEnum;
	__typename: EntryTypeEnum;
	itemContent?: PurpleItemContent;
	feedbackInfo?: FeedbackInfo;
	clientEventInfo?: PurpleClientEventInfo;
	items?: PurpleItem[];
	metadata?: ContentMetadata;
	displayType?: string;
	value?: string;
	cursorType?: string;
}

export enum EntryTypeEnum {
	TimelineTimelineCursor = "TimelineTimelineCursor",
	TimelineTimelineItem = "TimelineTimelineItem",
	TimelineTimelineModule = "TimelineTimelineModule",
}

export interface PurpleClientEventInfo {
	component: Component;
	element?: Ent;
	details: PurpleDetails;
}

export enum Component {
	ForYouFrs = "for_you_frs",
	ForYouInNetwork = "for_you_in_network",
	ForYouList = "for_you_list",
	ForYouPromoted = "for_you_promoted",
	ForYouTweetMixer = "for_you_tweet_mixer",
	ForYouUteg = "for_you_uteg",
}

export interface PurpleDetails {
	timelinesDetails: PurpleTimelinesDetails;
}

export interface PurpleTimelinesDetails {
	injectionType: PurpleInjectionType;
	controllerData: string;
}

export enum PurpleInjectionType {
	ForYouFrs = "ForYouFrs",
	ForYouInNetwork = "ForYouInNetwork",
	ForYouList = "ForYouList",
	ForYouPromoted = "ForYouPromoted",
	ForYouTweetMixer = "ForYouTweetMixer",
	ForYouUteg = "ForYouUteg",
}

export enum Ent {
	SuggestRankedOrganicTweet = "suggest_ranked_organic_tweet",
	SuggestWhoToFollow = "suggest_who_to_follow",
	Tweet = "tweet",
}

export interface FeedbackInfo {
	feedbackKeys: string[];
}

export interface PurpleItemContent {
	itemType: ItemTypeEnum;
	__typename: ItemTypeEnum;
	tweet_results: PurpleTweetResults;
	tweetDisplayType: TweetDisplayType;
	socialContext?: PurpleSocialContext;
	promotedMetadata?: PromotedMetadata;
}

export enum ItemTypeEnum {
	TimelineTweet = "TimelineTweet",
	TimelineUser = "TimelineUser",
}

export interface PromotedMetadata {
	advertiser_results: SerResults;
	disclosureType: string;
	experimentValues: ExperimentValue[];
	impressionId: string;
	impressionString: string;
	clickTrackingInfo: ClickTrackingInfo;
}

export interface SerResults {
	result: AdvertiserResultsResult;
}

export interface AdvertiserResultsResult {
	__typename: UserDisplayTypeEnum;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: ProfileImageShape;
	legacy: PurpleLegacy;
	professional?: Professional;
}

export enum UserDisplayTypeEnum {
	User = "User",
}

export interface AffiliatesHighlightedLabel {
	label?: Label;
}

export interface Label {
	url: LandingURLClass;
	badge: Badge;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Badge {
	url: string;
}

export interface LandingURLClass {
	url: string;
	urlType: URLType;
}

export enum URLType {
	DeepLink = "DeepLink",
	UrtEndpoint = "UrtEndpoint",
}

export interface PurpleLegacy {
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: PurpleEntities;
	fast_followers_count: number;
	favourites_count: number;
	followers_count: number;
	friends_count: number;
	has_custom_timelines: boolean;
	is_translator: boolean;
	listed_count: number;
	location: string;
	media_count: number;
	name: string;
	normal_followers_count: number;
	pinned_tweet_ids_str: string[];
	possibly_sensitive: boolean;
	profile_banner_url?: string;
	profile_image_url_https: string;
	profile_interstitial_type: string;
	screen_name: string;
	statuses_count: number;
	translator_type: TranslatorType;
	url?: string;
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
	following?: boolean;
	verified_type?: string;
}

export interface PurpleEntities {
	description: Description;
	url?: Description;
}

export interface Description {
	urls: URLElement[];
}

export interface URLElement {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export enum TranslatorType {
	None = "none",
	Regular = "regular",
}

export interface Professional {
	rest_id: string;
	professional_type: ProfessionalType;
	category: Category[];
}

export interface Category {
	id: number;
	name: string;
	icon_name: IconName;
}

export enum IconName {
	IconBriefcaseStroke = "IconBriefcaseStroke",
}

export enum ProfessionalType {
	Business = "Business",
	Creator = "Creator",
}

export enum ProfileImageShape {
	Circle = "Circle",
	Square = "Square",
}

export interface ClickTrackingInfo {
	urlParams: ExperimentValue[];
}

export interface ExperimentValue {
	key: string;
	value: string;
}

export interface PurpleSocialContext {
	type: SocialContextType;
	topic?: Topic;
	functionalityType?: string;
	contextType?: ContextType;
	text?: string;
	landingUrl?: LandingURL;
}

export enum ContextType {
	Follow = "Follow",
	Like = "Like",
}

export interface LandingURL {
	url: string;
	urlType: URLType;
	urtEndpointOptions?: UrtEndpointOptions;
}

export interface UrtEndpointOptions {
	title: string;
	requestParams: ExperimentValue[];
}

export interface Topic {
	description: string;
	following: boolean;
	icon_url: string;
	id: string;
	topic_id: string;
	name: string;
	not_interested: boolean;
}

export enum SocialContextType {
	TimelineGeneralContext = "TimelineGeneralContext",
	TimelineTopicContext = "TimelineTopicContext",
}

export enum TweetDisplayType {
	Tweet = "Tweet",
	TweetWithVisibilityResults = "TweetWithVisibilityResults",
}

export interface PurpleTweetResults {
	result: PurpleResult;
}

export interface PurpleResult {
	__typename: TweetDisplayType;
	rest_id?: string;
	core?: PurpleCore;
	edit_control?: PurpleEditControl;
	is_translatable?: boolean;
	views?: TweetViews;
	source?: string;
	legacy?: TentacledLegacy;
	tweet?: Tweet;
	limitedActionResults?: LimitedActionResults;
	note_tweet?: PurpleNoteTweet;
	quoted_status_result?: PurpleQuotedStatusResult;
	card?: PurpleCard;
	unified_card?: UnifiedCard;
	previous_counts?: PreviousCounts;
}

export interface PurpleCard {
	rest_id: string;
	legacy: FluffyLegacy;
}

export interface FluffyLegacy {
	binding_values: PurpleBindingValue[];
	card_platform: CardPlatform;
	name: string;
	url: string;
	user_refs_results: UserRe[];
}

export interface PurpleBindingValue {
	key: string;
	value: PurpleValue;
}

export interface PurpleValue {
	string_value?: string;
	type: ValueType;
	scribe_key?: ScribeKey;
	user_value?: UserValue;
	image_value?: ImageValue;
	boolean_value?: boolean;
	image_color_value?: ImageColorValue;
}

export interface ImageColorValue {
	palette: Palette[];
}

export interface Palette {
	rgb: RGB;
	percentage: number;
}

export interface RGB {
	blue: number;
	green: number;
	red: number;
}

export interface ImageValue {
	height: number;
	width: number;
	url: string;
	alt?: Alt;
}

export enum Alt {
	StronglyTypingReactPropsWithTypeScript = "Strongly Typing React Props with TypeScript",
}

export enum ScribeKey {
	CardURL = "card_url",
	PublisherID = "publisher_id",
	VanityURL = "vanity_url",
}

export enum ValueType {
	Boolean = "BOOLEAN",
	Image = "IMAGE",
	ImageColor = "IMAGE_COLOR",
	String = "STRING",
	User = "USER",
}

export interface UserValue {
	id_str: string;
	path: any[];
}

export interface CardPlatform {
	platform: Platform;
}

export interface Platform {
	audience: Audience;
	device: Device;
}

export interface Audience {
	name: AudienceName;
}

export enum AudienceName {
	Production = "production",
}

export interface Device {
	name: DeviceName;
	version: string;
}

export enum DeviceName {
	Swift = "Swift",
}

export interface UserRe {
	result: FluffyResult;
}

export interface FluffyResult {
	__typename: UserDisplayTypeEnum;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: Attributes;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: ProfileImageShape;
	legacy: PurpleLegacy;
	professional?: Professional;
}

export interface Attributes {
}

export interface PurpleCore {
	user_results: PurpleUserResults;
}

export interface PurpleUserResults {
	result: TentacledResult;
}

export interface TentacledResult {
	__typename: UserDisplayTypeEnum;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: ProfileImageShape;
	legacy: PurpleLegacy;
	professional?: Professional;
	super_follow_eligible?: boolean;
}

export interface PurpleEditControl {
	edit_tweet_ids?: string[];
	editable_until_msecs?: string;
	is_edit_eligible?: boolean;
	edits_remaining?: string;
	initial_tweet_id?: string;
	edit_control_initial?: EditControlInitialClass;
}

export interface EditControlInitialClass {
	edit_tweet_ids: string[];
	editable_until_msecs: string;
	is_edit_eligible: boolean;
	edits_remaining: string;
}

export interface TentacledLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: FluffyEntities;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: Lang;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
	extended_entities?: PurpleExtendedEntities;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink;
	place?: Place;
	scopes?: Scopes;
	retweeted_status_result?: PurpleRetweetedStatusResult;
}

export interface FluffyEntities {
	user_mentions: UserMention[];
	urls: URLElement[];
	hashtags: Hashtag[];
	symbols: Hashtag[];
	media?: PurpleMedia[];
}

export interface Hashtag {
	indices: number[];
	text: string;
}

export interface PurpleMedia {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_url_https: string;
	type: MediaType;
	url: string;
	features: PurpleFeatures;
	sizes: Sizes;
	original_info: PurpleOriginalInfo;
}

export interface PurpleFeatures {
	large?: OrigClass;
	medium?: OrigClass;
	small?: OrigClass;
	orig?: OrigClass;
	all?: All;
}

export interface All {
	tags: Tag[];
}

export interface Tag {
	user_id: string;
	name: string;
	screen_name: string;
	type: Element;
}

export enum Element {
	Tweet = "tweet",
	User = "user",
}

export interface OrigClass {
	faces: FocusRect[];
}

export interface FocusRect {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface PurpleOriginalInfo {
	height: number;
	width: number;
	focus_rects?: FocusRect[];
}

export interface Sizes {
	large: ThumbClass;
	medium: ThumbClass;
	small: ThumbClass;
	thumb: ThumbClass;
}

export interface ThumbClass {
	h: number;
	w: number;
	resize: Resize;
}

export enum Resize {
	Crop = "crop",
	Fit = "fit",
}

export enum MediaType {
	Photo = "photo",
	Video = "video",
}

export interface UserMention {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface PurpleExtendedEntities {
	media: FluffyMedia[];
}

export interface FluffyMedia {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: MediaType;
	url: string;
	ext_media_availability: EXTMediaAvailability;
	features: PurpleFeatures;
	sizes: Sizes;
	original_info: PurpleOriginalInfo;
	additional_media_info?: PurpleAdditionalMediaInfo;
	mediaStats?: MediaStats;
	video_info?: VideoInfo;
	ext_alt_text?: string;
}

export interface PurpleAdditionalMediaInfo {
	monetizable: boolean;
}

export interface EXTMediaAvailability {
	status: Status;
}

export enum Status {
	Available = "Available",
}

export interface MediaStats {
	viewCount: number;
}

export interface VideoInfo {
	aspect_ratio: number[];
	duration_millis: number;
	variants: Variant[];
}

export interface Variant {
	bitrate?: number;
	content_type: ContentType;
	url: string;
}

export enum ContentType {
	ApplicationXMPEGURL = "application/x-mpegURL",
	VideoMp4 = "video/mp4",
}

export enum Lang {
	En = "en",
}

export interface Place {
	attributes: Attributes;
	bounding_box: BoundingBox;
	contained_within: any[];
	country: string;
	country_code: string;
	full_name: string;
	name: string;
	id: string;
	place_type: string;
	url: string;
}

export interface BoundingBox {
	coordinates: Array<Array<number[]>>;
	type: string;
}

export interface QuotedStatusPermalink {
	url: string;
	expanded: string;
	display: string;
}

export interface PurpleRetweetedStatusResult {
	result: StickyResult;
}

export interface StickyResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: FluffyCore;
	edit_control: EditControlInitialClass;
	is_translatable: boolean;
	views: TweetViews;
	source: string;
	legacy: StickyLegacy;
}

export interface FluffyCore {
	user_results: FluffyUserResults;
}

export interface FluffyUserResults {
	result: IndigoResult;
}

export interface IndigoResult {
	__typename: UserDisplayTypeEnum;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: ProfileImageShape;
	legacy: PurpleLegacy;
}

export interface StickyLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: PurpleEntit;
	extended_entities: FluffyExtendedEntities;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: Lang;
	possibly_sensitive: boolean;
	possibly_sensitive_editable: boolean;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
}

export interface PurpleEntit {
	media?: EntitySetMedia[];
	user_mentions: UserMention[];
	urls: URLElement[];
	hashtags: Hashtag[];
	symbols: any[];
}

export interface EntitySetMedia {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_url_https: string;
	type: MediaType;
	url: string;
	features: FluffyFeatures;
	sizes: Sizes;
	original_info: PurpleOriginalInfo;
}

export interface FluffyFeatures {
	large?: OrigClass;
	medium?: OrigClass;
	small?: OrigClass;
	orig?: OrigClass;
}

export interface FluffyExtendedEntities {
	media: TentacledMedia[];
}

export interface TentacledMedia {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: MediaType;
	url: string;
	additional_media_info: FluffyAdditionalMediaInfo;
	mediaStats: MediaStats;
	ext_media_availability: EXTMediaAvailability;
	features: Attributes;
	sizes: Sizes;
	original_info: FluffyOriginalInfo;
	video_info: VideoInfo;
}

export interface FluffyAdditionalMediaInfo {
	title: string;
	description: string;
	embeddable: boolean;
	monetizable: boolean;
	call_to_actions?: CallToActions;
}

export interface CallToActions {
	visit_site: Badge;
}

export interface FluffyOriginalInfo {
	height: number;
	width: number;
}

export interface TweetViews {
	count?: string;
	state: State;
}

export enum State {
	Enabled = "Enabled",
	EnabledWithCount = "EnabledWithCount",
}

export interface Scopes {
	followers: boolean;
}

export interface LimitedActionResults {
	limited_actions: LimitedAction[];
}

export interface LimitedAction {
	action: string;
	prompt: Prompt;
}

export interface Prompt {
	__typename: string;
	cta_type: string;
	headline: SubtitleClass;
	subtext: SubtitleClass;
}

export interface SubtitleClass {
	text: string;
	entities: Entity[];
}

export interface Entity {
	fromIndex: number;
	toIndex: number;
	ref: Ref;
}

export interface Ref {
	type: string;
	url: string;
	urlType: string;
}

export interface PurpleNoteTweet {
	is_expandable: boolean;
	note_tweet_results: PurpleNoteTweetResults;
}

export interface PurpleNoteTweetResults {
	result: IndecentResult;
}

export interface IndecentResult {
	id: string;
	text: string;
	entity_set: FluffyEntit;
	richtext?: Richtext;
	media?: ResultMedia;
}

export interface FluffyEntit {
	user_mentions: UserMention[];
	urls: URLElement[];
	hashtags: any[];
	symbols: any[];
}

export interface ResultMedia {
	inline_media: InlineMedia[];
}

export interface InlineMedia {
	media_id: string;
	index: number;
}

export interface Richtext {
	richtext_tags: RichtextTag[];
}

export interface RichtextTag {
	from_index: number;
	to_index: number;
	richtext_types: RichtextType[];
}

export enum RichtextType {
	Bold = "Bold",
}

export interface PreviousCounts {
	bookmark_count: number;
	favorite_count: number;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
}

export interface PurpleQuotedStatusResult {
	result: HilariousResult;
}

export interface HilariousResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: TentacledCore;
	edit_control: EditControlInitialClass;
	is_translatable: boolean;
	views: TweetViews;
	source: string;
	legacy: IndigoLegacy;
}

export interface TentacledCore {
	user_results: ItemContentUserResults;
}

export interface ItemContentUserResults {
	result: AmbitiousResult;
}

export interface AmbitiousResult {
	__typename: UserDisplayTypeEnum;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: Attributes;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: PurpleLegacy;
	professional?: Professional;
	has_nft_avatar?: boolean;
}

export interface IndigoLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: PurpleEntit;
	extended_entities?: TentacledExtendedEntities;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: Lang;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
	in_reply_to_screen_name?: string;
	in_reply_to_status_id_str?: string;
	in_reply_to_user_id_str?: string;
}

export interface TentacledExtendedEntities {
	media: StickyMedia[];
}

export interface StickyMedia {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: MediaType;
	url: string;
	ext_media_availability: EXTMediaAvailability;
	features: PurpleFeatures;
	sizes: Sizes;
	original_info: PurpleOriginalInfo;
	additional_media_info?: PurpleAdditionalMediaInfo;
	mediaStats?: MediaStats;
	video_info?: VideoInfo;
}

export interface Tweet {
	rest_id: string;
	core: TweetCore;
	card?: TweetCard;
	unified_card?: UnifiedCard;
	edit_control: EditControlInitialClass;
	is_translatable: boolean;
	views: TweetViews;
	source: string;
	legacy: TweetLegacy;
	birdwatch_pivot?: BirdwatchPivot;
}

export interface BirdwatchPivot {
	callToAction: CallToAction;
	destinationUrl: string;
	footer: SubtitleClass;
	note: Note;
	subtitle: SubtitleClass;
	title: string;
	shorttitle: string;
	iconType: string;
}

export interface CallToAction {
	prompt: string;
	title: string;
	destinationUrl: string;
}

export interface Note {
	rest_id: string;
}

export interface TweetCard {
	rest_id: string;
	legacy: IndecentLegacy;
}

export interface IndecentLegacy {
	binding_values: FluffyBindingValue[];
	card_platform: CardPlatform;
	name: string;
	url: string;
	user_refs_results: any[];
}

export interface FluffyBindingValue {
	key: string;
	value: FluffyValue;
}

export interface FluffyValue {
	string_value: string;
	type: ValueType;
	scribe_key?: ScribeKey;
}

export interface TweetCore {
	user_results: SerResults;
}

export interface TweetLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_control: ConversationControl;
	conversation_id_str: string;
	display_text_range: number[];
	entities: PurpleEntit;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: Lang;
	limited_actions: string;
	possibly_sensitive: boolean;
	possibly_sensitive_editable: boolean;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	scopes: Scopes;
	user_id_str: string;
	id_str: string;
	extended_entities?: FluffyExtendedEntities;
}

export interface ConversationControl {
	policy: string;
	conversation_owner_results: ConversationOwnerResults;
}

export interface ConversationOwnerResults {
	result: ConversationOwnerResultsResult;
}

export interface ConversationOwnerResultsResult {
	__typename: UserDisplayTypeEnum;
	legacy: HilariousLegacy;
}

export interface HilariousLegacy {
	screen_name: string;
}

export interface UnifiedCard {
	card_fetch_state: CardFetchState;
}

export enum CardFetchState {
	NoCard = "NoCard",
}

export interface PurpleItem {
	entryId: string;
	item: FluffyItem;
}

export interface FluffyItem {
	itemContent: FluffyItemContent;
	feedbackInfo: FeedbackInfo;
	clientEventInfo: PurpleClientEventInfo;
}

export interface FluffyItemContent {
	itemType: ItemTypeEnum;
	__typename: ItemTypeEnum;
	tweet_results: FluffyTweetResults;
	tweetDisplayType: TweetDisplayType;
	socialContext?: FluffySocialContext;
}

export interface FluffySocialContext {
	type: SocialContextType;
	contextType: string;
	text: string;
	landingUrl?: LandingURLClass;
}

export interface FluffyTweetResults {
	result: CunningResult;
}

export interface CunningResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: StickyCore;
	edit_control: EditControlInitialClass;
	is_translatable: boolean;
	views: TweetViews;
	source: string;
	legacy: AmbitiousLegacy;
}

export interface StickyCore {
	user_results: UserRe;
}

export interface AmbitiousLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: FluffyEntit;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: Lang;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
	in_reply_to_screen_name?: string;
	in_reply_to_status_id_str?: string;
	in_reply_to_user_id_str?: string;
}

export interface ContentMetadata {
	conversationMetadata: ConversationMetadata;
}

export interface ConversationMetadata {
	allTweetIds: string[];
	enableDeduplication: boolean;
}

export interface HomeTimelineUrtMetadata {
	scribeConfig: ScribeConfig;
}

export interface ScribeConfig {
	page: string;
}

export interface ResponseObjects {
	feedbackActions: FeedbackAction[];
}

export interface FeedbackAction {
	key: string;
	value: FeedbackActionValue;
}

export interface FeedbackActionValue {
	feedbackType: FeedbackType;
	prompt?: string;
	confirmation?: string;
	feedbackUrl?: string;
	hasUndoAction: boolean;
	childKeys?: string[];
	icon?: Icon;
	richBehavior?: RichBehavior;
}

export enum FeedbackType {
	DontLike = "DontLike",
	NotRelevant = "NotRelevant",
	RichBehavior = "RichBehavior",
	SeeFewer = "SeeFewer",
}

export enum Icon {
	Frown = "Frown",
}

export interface RichBehavior {
	type: string;
	topic: Topic;
}

export interface User {
	result: UserResult;
}

export interface UserResult {
	__typename: UserDisplayTypeEnum;
	timeline_v2: TimelineV2;
}

export interface TimelineV2 {
	timeline: Timeline;
}

export interface Timeline {
	instructions: TimelineInstruction[];
	metadata: HomeTimelineUrtMetadata;
}

export interface TimelineInstruction {
	type: string;
	entry?: TentacledEntry;
	entries?: FluffyEntry[];
}

export interface FluffyEntry {
	entryId: string;
	sortIndex: string;
	content: FluffyContent;
}

export interface FluffyContent {
	entryType: EntryTypeEnum;
	__typename: EntryTypeEnum;
	items?: TentacledItem[];
	metadata?: ContentMetadata;
	displayType?: string;
	clientEventInfo?: FluffyClientEventInfo;
	itemContent?: TentacledItemContent;
	header?: Header;
	footer?: ContentFooter;
	value?: string;
	cursorType?: string;
}

export interface FluffyClientEventInfo {
	component: Ent;
	details: FluffyDetails;
	element?: Element;
}

export interface FluffyDetails {
	timelinesDetails: FluffyTimelinesDetails;
}

export interface FluffyTimelinesDetails {
	injectionType: FluffyInjectionType;
	controllerData: ControllerData;
	sourceData?: string;
}

export enum ControllerData {
	DAACDAABDAABCGABAAAAAAAAAAAKAAkAAAAAAE0TQAAAAA = "DAACDAABDAABCgABAAAAAAAAAAAKAAkAAAAAA/E0TQAAAAA=",
	DAACDAACDAABCGABAAAAAAAAAEAAAAAA = "DAACDAACDAABCgABAAAAAAAAAEAAAAAA",
}

export enum FluffyInjectionType {
	RankedOrganicTweet = "RankedOrganicTweet",
	WhoToFollow = "WhoToFollow",
}

export interface ContentFooter {
	displayType: string;
	text: string;
	landingUrl: LandingURLClass;
}

export interface Header {
	displayType: string;
	text: string;
	sticky: boolean;
}

export interface TentacledItemContent {
	itemType: ItemTypeEnum;
	__typename: ItemTypeEnum;
	tweet_results: TentacledTweetResults;
	tweetDisplayType: TweetDisplayType;
}

export interface TentacledTweetResults {
	result: MagentaResult;
}

export interface MagentaResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: StickyCore;
	edit_control: EditControlInitialClass;
	is_translatable: boolean;
	views: TweetViews;
	source: string;
	note_tweet?: PurpleNoteTweet;
	legacy: CunningLegacy;
	quick_promote_eligibility: QuickPromoteEligibility;
}

export interface CunningLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: PurpleEntit;
	extended_entities?: StickyExtendedEntities;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: Lang;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
	retweeted_status_result?: FluffyRetweetedStatusResult;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink;
}

export interface StickyExtendedEntities {
	media: IndigoMedia[];
}

export interface IndigoMedia {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_url_https: string;
	type: MediaType;
	url: string;
	features: PurpleFeatures;
	sizes: Sizes;
	original_info: PurpleOriginalInfo;
	media_key?: string;
	ext_media_availability?: EXTMediaAvailability;
	ext_alt_text?: string;
}

export interface FluffyRetweetedStatusResult {
	result: FriskyResult;
}

export interface FriskyResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: TentacledCore;
	edit_control: EditControlInitialClass;
	is_translatable: boolean;
	views: TweetViews;
	source: string;
	legacy: MagentaLegacy;
	quoted_status_result?: FluffyQuotedStatusResult;
}

export interface MagentaLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: FluffyEntities;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: Lang;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink;
	extended_entities?: StickyExtendedEntities;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
}

export interface FluffyQuotedStatusResult {
	result: MischievousResult;
}

export interface MischievousResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: StickyCore;
	edit_control: EditControlInitialClass;
	is_translatable: boolean;
	views: TweetViews;
	source: string;
	note_tweet: FluffyNoteTweet;
	legacy: AmbitiousLegacy;
}

export interface FluffyNoteTweet {
	is_expandable: boolean;
	note_tweet_results: FluffyNoteTweetResults;
}

export interface FluffyNoteTweetResults {
	result: BraggadociousResult;
}

export interface BraggadociousResult {
	id: string;
	text: string;
	entity_set: PurpleEntit;
}

export interface QuickPromoteEligibility {
	eligibility: Eligibility;
}

export enum Eligibility {
	IneligibleNotProfessional = "IneligibleNotProfessional",
}

export interface TentacledItem {
	entryId: string;
	item: StickyItem;
}

export interface StickyItem {
	itemContent: StickyItemContent;
	clientEventInfo: FluffyClientEventInfo;
}

export interface StickyItemContent {
	itemType: ItemTypeEnum;
	__typename: ItemTypeEnum;
	tweet_results?: StickyTweetResults;
	tweetDisplayType?: TweetDisplayType;
	user_results?: ItemContentUserResults;
	userDisplayType?: UserDisplayTypeEnum;
	socialContext?: FluffySocialContext;
}

export interface StickyTweetResults {
	result: Result1;
}

export interface Result1 {
	__typename: TweetDisplayType;
	rest_id: string;
	core: StickyCore;
	card?: FluffyCard;
	unified_card?: UnifiedCard;
	edit_control: EditControlInitialClass;
	is_translatable: boolean;
	views: TweetViews;
	source: string;
	legacy: MischievousLegacy;
	quick_promote_eligibility: QuickPromoteEligibility;
	note_tweet?: PurpleNoteTweet;
}

export interface FluffyCard {
	rest_id: string;
	legacy: FriskyLegacy;
}

export interface FriskyLegacy {
	binding_values: PurpleBindingValue[];
	card_platform: CardPlatform;
	name: string;
	url: string;
	user_refs_results: UserRefsResult[];
}

export interface UserRefsResult {
	result: Result2;
}

export interface Result2 {
	__typename: UserDisplayTypeEnum;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: Attributes;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: ProfileImageShape;
	legacy: PurpleLegacy;
}

export interface MischievousLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: FluffyEntities;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: Lang;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
	in_reply_to_screen_name?: string;
	in_reply_to_status_id_str?: string;
	in_reply_to_user_id_str?: string;
	extended_entities?: StickyExtendedEntities;
}

export interface TentacledEntry {
	entryId: string;
	sortIndex: string;
	content: TentacledContent;
}

export interface TentacledContent {
	entryType: EntryTypeEnum;
	__typename: EntryTypeEnum;
	itemContent: IndigoItemContent;
	clientEventInfo: TentacledClientEventInfo;
}

export interface TentacledClientEventInfo {
	component: string;
	element: Ent;
}

export interface IndigoItemContent {
	itemType: ItemTypeEnum;
	__typename: ItemTypeEnum;
	tweet_results: IndigoTweetResults;
	tweetDisplayType: TweetDisplayType;
	socialContext: FluffySocialContext;
}

export interface IndigoTweetResults {
	result: Result3;
}

export interface Result3 {
	__typename: TweetDisplayType;
	rest_id: string;
	core: StickyCore;
	edit_control: EditControlInitialClass;
	is_translatable: boolean;
	views: PurpleViews;
	source: string;
	legacy: BraggadociousLegacy;
	quick_promote_eligibility: QuickPromoteEligibility;
}

export interface BraggadociousLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: FluffyEntities;
	extended_entities: StickyExtendedEntities;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: Lang;
	possibly_sensitive: boolean;
	possibly_sensitive_editable: boolean;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
}

export interface PurpleViews {
	state: State;
}
