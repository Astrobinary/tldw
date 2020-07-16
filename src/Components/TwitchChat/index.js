import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faStars, faSeedling, faCog } from '@fortawesome/pro-duotone-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { fetchChatReplay } from '../../Redux/chatReducer';

import './TwitchChat.scss';

gsap.registerPlugin(ScrollToPlugin);
const TwitchChat = (props) => {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const chatReplay = useSelector((state) => state.chatReplay);
	const scrollableNodeRef = React.createRef();

	useEffect(() => {
		if (props.vod) {
			if (chatReplay.chats[slug] === undefined) {
				dispatch(fetchChatReplay(slug, props.vod.id, props.vod.offset, props.duration));
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug]);

	const renderBadges = (comment) => {
		let badgeText = [];

		if (!comment.message['user_badges']) return;

		comment.message['user_badges'].forEach((badge) => {
			if (badge['_id'] === 'vip') {
				badgeText.push(
					<div title='vip' key='vip'>
						<FontAwesomeIcon className='icon' alt={'vip'} icon={faStars} />
					</div>
				);
			}

			if (badge['_id'] === 'moderator') {
				badgeText.push(
					<div title='mod' key='mod'>
						<FontAwesomeIcon className='icon' alt={'mod'} icon={faShieldAlt} />
					</div>
				);
			}

			if (badge['_id'] === 'subscriber') {
				badgeText.push(
					<div title='subscriber' key='sub'>
						<FontAwesomeIcon className='icon' alt={'sub'} icon={faSeedling} />
					</div>
				);
			}
		});

		return badgeText;
	};

	function removeDuplicates(myArr, prop) {
		return myArr.filter((obj, pos, arr) => {
			return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
		});
	}

	const renderChat = () => {
		if (!chatReplay.chats[slug]) return;
		const noDupes = removeDuplicates(chatReplay.chats[slug], '_id');

		return (
			<React.Fragment>
				{noDupes.map((comment, index) => (
					<div className='chat-block' key={`c${comment['_id']}`} id={`c${comment['_id']}`} style={{ borderLeft: `2px solid ${comment.message['user_color']}` }}>
						<div className='commenter'>
							<span style={{ paddingRight: '5px', color: `${comment.message['user_color']}` }}>{comment.commenter['display_name']}</span>
							<div className='badges'>{renderBadges(comment)}</div>
						</div>
						<div className='message'>{comment.message.body}</div>
					</div>
				))}
			</React.Fragment>
		);
	};

	useEffect(() => {
		if (chatReplay.chats[slug] && scrollableNodeRef.current) {
			var tl = gsap.timeline();
			const timeInBetween = props.duration / chatReplay.chats[slug].length;
			chatReplay.chats[slug].forEach((comment, index) => {
				tl.to(`#c${comment['_id']}`, {
					duration: timeInBetween,
					display: 'block',
					onComplete: function () {
						if (scrollableNodeRef.current) {
							scrollableNodeRef.current.scrollTop = scrollableNodeRef.current.scrollHeight - 40;
						}
					},
				});
			});
		}
	});

	return (
		<div className='TwitchChat'>
			<SimpleBar scrollableNodeProps={{ ref: scrollableNodeRef }} className='chat-container' id='simplebar' style={{ maxHeight: props.videoRef.current ? props.videoRef.current.clientHeight + 5 : 100 }}>
				{renderChat()}
			</SimpleBar>
			<div className='chat-settings'>
				chat settings <FontAwesomeIcon className='icon' alt={'chat settings'} icon={faCog} />
			</div>
		</div>
	);
};

export default TwitchChat;
