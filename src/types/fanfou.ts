export type Status = {
	created_at: string;
	id: string;
	rawid: number;
	text: string;
	source: string;
	truncated: boolean;
	in_reply_to_status_id?: string;
	in_reply_to_user_id?: string;
	in_reply_to_screen_name?: string;
	favorited: boolean;
	is_self: boolean;
	location: string;
	repost_status_id?: string;
	repost_user_id?: string;
	repost_screen_name?: string;
	type: string;
	source_url?: string;
	source_name?: string;
	plain_text?: string;
	user: User;
	photo?: Photo;
	entities?: Entity[];
};

export type User = {
	id: string;
	name: string;
	screen_name: string;
	unique_id: string;
	location: string;
	gender: string;
	birthday: string;
	description: string;
	profile_image_url: string;
	profile_image_url_large: string;
	url: string;
	protected: boolean;
	followers_count: number;
	friends_count: number;
	favourites_count: number;
	statuses_count: number;
	photo_count: number;
	following: boolean;
	notifications: boolean;
	created_at: string;
	utc_offset: number;
	profile_image_origin?: string;
	profile_image_origin_large?: string;
	profile_background_color?: string;
	profile_text_color?: string;
	profile_link_color?: string;
	profile_sidebar_fill_color?: string;
	profile_sidebar_border_color?: string;
	profile_background_image_url?: string;
	profile_background_tile?: boolean;
	status?: Status;
};

export type Photo = {
	url: string;
	imageurl: string;
	thumburl: string;
	largeurl: string;
	originurl?: string;
	type?: string;
};

export type TextEntity = {
	type: 'text';
	text: string;
};

export type TagEntity = {
	type: 'tag';
	text: string;
	query: string;
};

export type AtEntity = {
	type: 'at';
	text: string;
	name: string;
	id: string;
};

export type LinkEntity = {
	type: 'link';
	text: string;
	link: string;
};

export type Entity = TextEntity | TextEntity | AtEntity | LinkEntity;

export type DirectMessage = {
	id: string;
	text: string;
	sender_id: string;
	recipient_id: string;
	created_at: string;
	sendre_screen_name: string;
	recipient_screen_name: string;
	sender: User;
	recipent: User;
	in_reply_to?: DirectMessage;
};

