export interface UserTweetData {
	data: Data;
}

export interface Data {
	user: User;
}

export interface User {
	result: UserResult;
}

export interface UserResult {
	__typename: UserDisplayTypeEnum;
	timeline_v2: TimelineV2;
}

export enum UserDisplayTypeEnum {
	User = "User",
}

export interface TimelineV2 {
	timeline: Timeline;
}

export interface Timeline {
	instructions: Instruction[];
	metadata: TimelineMetadata;
}

export interface Instruction {
	type: string;
	entry?: PurpleEntry;
	entries?: EntryElement[];
}

export interface EntryElement {
	entryId: string;
	sortIndex: string;
	content: PurpleContent;
}

export interface PurpleContent {
	entryType: EntryTypeEnum;
	__typename: EntryTypeEnum;
	items?: ItemElement[];
	metadata?: ContentMetadata;
	displayType?: string;
	clientEventInfo?: ItemClientEventInfo;
	itemContent?: PurpleItemContent;
	header?: Header;
	footer?: Footer;
	value?: string;
	cursorType?: string;
}

export enum EntryTypeEnum {
	TimelineTimelineCursor = "TimelineTimelineCursor",
	TimelineTimelineItem = "TimelineTimelineItem",
	TimelineTimelineModule = "TimelineTimelineModule",
}

export interface ItemClientEventInfo {
	component: Ent;
	details: Details;
	element?: Element;
}

export enum Ent {
	SuggestRankedOrganicTweet = "suggest_ranked_organic_tweet",
	SuggestWhoToFollow = "suggest_who_to_follow",
	Tweet = "tweet",
}

export interface Details {
	timelinesDetails: TimelinesDetails;
}

export interface TimelinesDetails {
	injectionType: InjectionType;
	controllerData: ControllerData;
	sourceData?: string;
}

export enum ControllerData {
	DAACDAABDAABCGABAAAAAAAAAAAKAAkAAAAAAE0TQAAAAA = "DAACDAABDAABCgABAAAAAAAAAAAKAAkAAAAAA/E0TQAAAAA=",
	DAACDAACDAABCGABAAAAAAAAAEAAAAAA = "DAACDAACDAABCgABAAAAAAAAAEAAAAAA",
}

export enum InjectionType {
	RankedOrganicTweet = "RankedOrganicTweet",
	WhoToFollow = "WhoToFollow",
}

export enum Element {
	Tweet = "tweet",
	User = "user",
}

export interface Footer {
	displayType: string;
	text: string;
	landingUrl: LandingURLClass;
}

export interface LandingURLClass {
	url: string;
	urlType: string;
}

export interface Header {
	displayType: string;
	text: string;
	sticky: boolean;
}

export interface PurpleItemContent {
	itemType: ItemTypeEnum;
	__typename: ItemTypeEnum;
	tweet_results: PurpleTweetResults;
	tweetDisplayType: TweetDisplayType;
}

export enum ItemTypeEnum {
	TimelineTweet = "TimelineTweet",
	TimelineUser = "TimelineUser",
}

export enum TweetDisplayType {
	Tweet = "Tweet",
}

export interface PurpleTweetResults {
	result: PurpleResult;
}

export interface PurpleResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: PurpleCore;
	edit_control: EditControl;
	is_translatable: boolean;
	views: PurpleViews;
	source: string;
	note_tweet?: FluffyNoteTweet;
	legacy: TentacledLegacy;
	quick_promote_eligibility: QuickPromoteEligibility;
	card?: PurpleCard;
	unified_card?: UnifiedCard;
}

export interface PurpleCard {
	rest_id: string;
	legacy: PurpleLegacy;
}

export interface PurpleLegacy {
	binding_values: BindingValue[];
	card_platform: CardPlatform;
	name: string;
	url: string;
	user_refs_results: UserRefsResult[];
}

export interface BindingValue {
	key: string;
	value: Value;
}

export interface Value {
	image_value?: ImageValue;
	type: ValueType;
	string_value?: string;
	user_value?: UserValue;
	scribe_key?: ScribeKey;
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
	name: string;
}

export interface Device {
	name: string;
	version: string;
}

export interface UserRefsResult {
	result: FluffyResult;
}

export interface FluffyResult {
	__typename: UserDisplayTypeEnum;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: PurpleAffiliatesHighlightedLabel;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: FluffyLegacy;
}

export interface PurpleAffiliatesHighlightedLabel {
}

export interface FluffyLegacy {
	following?: boolean;
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
	profile_banner_url: string;
	profile_image_url_https: string;
	profile_interstitial_type: string;
	screen_name: string;
	statuses_count: number;
	translator_type: TranslatorType;
	url: string;
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
	verified_type?: string;
}

export interface PurpleEntities {
	description: Description;
	url: Description;
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

export interface PurpleCore {
	user_results: UserRe;
}

export interface UserRe {
	result: TentacledResult;
}

export interface TentacledResult {
	__typename: UserDisplayTypeEnum;
	id: ID;
	rest_id: string;
	affiliates_highlighted_label: PurpleAffiliatesHighlightedLabel;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: ProfileImageShape;
	legacy: FluffyLegacy;
	professional?: Professional;
}

export enum ID {
	VXNlcjo3MzQ5MDM = "VXNlcjo3MzQ5MDM=",
	VXNlcjozNDY2NDA3Nzc = "VXNlcjozNDY2NDA3Nzc=",
}

export interface Professional {
	rest_id: string;
	professional_type: string;
	category: Category[];
}

export interface Category {
	id: number;
	name: string;
	icon_name: string;
}

export enum ProfileImageShape {
	Circle = "Circle",
}

export interface EditControl {
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
	entities: Entit;
	extended_entities?: ExtendedEntities;
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
	retweeted_status_result?: RetweetedStatusResult;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink;
}

export interface Entit {
	media?: EntitySetMedia[];
	user_mentions: UserMention[];
	urls: URLElement[];
	hashtags: any[];
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
	features: Features;
	sizes: Sizes;
	original_info: OriginalInfo;
	media_key?: string;
	ext_media_availability?: EXTMediaAvailability;
	ext_alt_text?: string;
}

export interface EXTMediaAvailability {
	status: string;
}

export interface Features {
	large: OrigClass;
	medium: OrigClass;
	small: OrigClass;
	orig: OrigClass;
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

export interface OrigClass {
	faces: FocusRect[];
}

export interface FocusRect {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface OriginalInfo {
	height: number;
	width: number;
	focus_rects: FocusRect[];
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
}

export interface UserMention {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface ExtendedEntities {
	media: EntitySetMedia[];
}

export enum Lang {
	En = "en",
}

export interface QuotedStatusPermalink {
	url: string;
	expanded: string;
	display: string;
}

export interface RetweetedStatusResult {
	result: RetweetedStatusResultResult;
}

export interface RetweetedStatusResultResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: FluffyCore;
	edit_control: EditControl;
	is_translatable: boolean;
	views: PurpleViews;
	source: string;
	legacy: StickyLegacy;
	quoted_status_result?: QuotedStatusResult;
	card?: PurpleCard;
	unified_card?: UnifiedCard;
}

export interface FluffyCore {
	user_results: CoreUserResults;
}

export interface CoreUserResults {
	result: StickyResult;
}

export interface StickyResult {
	__typename: UserDisplayTypeEnum;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: PurpleAffiliatesHighlightedLabel;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: FluffyLegacy;
	professional?: Professional;
	has_nft_avatar?: boolean;
}

export interface StickyLegacy {
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
	extended_entities?: ExtendedEntities;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
}

export interface FluffyEntities {
	user_mentions: UserMention[];
	urls: URLElement[];
	hashtags: any[];
	symbols: any[];
	media?: PurpleMedia[];
}

export interface PurpleMedia {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_url_https: string;
	type: MediaType;
	url: string;
	features: Features;
	sizes: Sizes;
	original_info: OriginalInfo;
}

export interface QuotedStatusResult {
	result: QuotedStatusResultResult;
}

export interface QuotedStatusResultResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: PurpleCore;
	edit_control: EditControl;
	is_translatable: boolean;
	views: PurpleViews;
	source: string;
	note_tweet: PurpleNoteTweet;
	legacy: IndigoLegacy;
}

export interface IndigoLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entit;
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
}

export interface PurpleNoteTweet {
	is_expandable: boolean;
	note_tweet_results: PurpleNoteTweetResults;
}

export interface PurpleNoteTweetResults {
	result: IndigoResult;
}

export interface IndigoResult {
	id: string;
	text: string;
	entity_set: Entit;
}

export interface PurpleViews {
	count?: string;
	state: State;
}

export enum State {
	Enabled = "Enabled",
	EnabledWithCount = "EnabledWithCount",
}

export interface UnifiedCard {
	card_fetch_state: string;
}

export interface FluffyNoteTweet {
	is_expandable: boolean;
	note_tweet_results: FluffyNoteTweetResults;
}

export interface FluffyNoteTweetResults {
	result: IndecentResult;
}

export interface IndecentResult {
	id: string;
	text: string;
	entity_set: EntitySet;
	richtext: Richtext;
	media: ResultMedia;
}

export interface EntitySet {
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

export interface QuickPromoteEligibility {
	eligibility: Eligibility;
}

export enum Eligibility {
	IneligibleNotProfessional = "IneligibleNotProfessional",
}

export interface ItemElement {
	entryId: string;
	item: ItemItem;
}

export interface ItemItem {
	itemContent: ItemItemContent;
	clientEventInfo: ItemClientEventInfo;
}

export interface ItemItemContent {
	itemType: ItemTypeEnum;
	__typename: ItemTypeEnum;
	tweet_results?: FluffyTweetResults;
	tweetDisplayType?: TweetDisplayType;
	user_results?: ItemContentUserResults;
	userDisplayType?: UserDisplayTypeEnum;
	socialContext?: SocialContext;
}

export interface SocialContext {
	type: string;
	contextType: string;
	text: string;
}

export interface FluffyTweetResults {
	result: HilariousResult;
}

export interface HilariousResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: PurpleCore;
	edit_control: EditControl;
	is_translatable: boolean;
	views: PurpleViews;
	source: string;
	legacy: HilariousLegacy;
	quick_promote_eligibility: QuickPromoteEligibility;
	note_tweet?: FluffyNoteTweet;
	card?: FluffyCard;
	unified_card?: UnifiedCard;
}

export interface FluffyCard {
	rest_id: string;
	legacy: IndecentLegacy;
}

export interface IndecentLegacy {
	binding_values: BindingValue[];
	card_platform: CardPlatform;
	name: string;
	url: string;
	user_refs_results: UserRe[];
}

export interface HilariousLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: FluffyEntities;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	in_reply_to_screen_name?: string;
	in_reply_to_user_id_str?: string;
	is_quote_status: boolean;
	lang: Lang;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
	in_reply_to_status_id_str?: string;
	extended_entities?: ExtendedEntities;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
}

export interface ItemContentUserResults {
	result: AmbitiousResult;
}

export interface AmbitiousResult {
	__typename: UserDisplayTypeEnum;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: FluffyAffiliatesHighlightedLabel;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: FluffyLegacy;
	professional?: Professional;
}

export interface FluffyAffiliatesHighlightedLabel {
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

export interface ContentMetadata {
	conversationMetadata: ConversationMetadata;
}

export interface ConversationMetadata {
	allTweetIds: string[];
	enableDeduplication: boolean;
}

export interface PurpleEntry {
	entryId: string;
	sortIndex: string;
	content: FluffyContent;
}

export interface FluffyContent {
	entryType: EntryTypeEnum;
	__typename: EntryTypeEnum;
	itemContent: FluffyItemContent;
	clientEventInfo: PurpleClientEventInfo;
}

export interface PurpleClientEventInfo {
	component: string;
	element: Ent;
}

export interface FluffyItemContent {
	itemType: ItemTypeEnum;
	__typename: ItemTypeEnum;
	tweet_results: TentacledTweetResults;
	tweetDisplayType: TweetDisplayType;
	socialContext: SocialContext;
}

export interface TentacledTweetResults {
	result: CunningResult;
}

export interface CunningResult {
	__typename: TweetDisplayType;
	rest_id: string;
	core: PurpleCore;
	edit_control: EditControl;
	is_translatable: boolean;
	views: FluffyViews;
	source: string;
	legacy: AmbitiousLegacy;
	quick_promote_eligibility: QuickPromoteEligibility;
}

export interface AmbitiousLegacy {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: FluffyEntities;
	extended_entities: ExtendedEntities;
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

export interface FluffyViews {
	state: State;
}

export interface TimelineMetadata {
	scribeConfig: ScribeConfig;
}

export interface ScribeConfig {
	page: string;
}
