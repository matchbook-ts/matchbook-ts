/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {match, rest, strike} from '../../../src';
import {
    Event,
    EventType,
    isMessage,
    isReaction,
    MessageEvent,
    ReactionEvent,
} from './types';

/**
 * @file e2e test using exhaustive Type Guard matching
 */

const getLogMessage = (e: Event) => strike(
    e,
    match(isMessage, m => `you posted a message: ${m.messageBody}`),
    match(isReaction, r => `this is an emoji: ${r.reactionEmojiCode}`),
    rest(`Unsupported event type: ${e.eventType}`),
);

test('e2e(events): `getLogMessage` should return correct message, when event is message', t => {
    // arrange
    const msgEvent: MessageEvent = {
        eventType: EventType.Message,
        messageBody: 'yo, angelo!',
        userId: 'josuke',
        channel: '#walking-to-school',
    };

    // act
    const actual = getLogMessage(msgEvent);

    // assert
    t.is(actual, 'you posted a message: yo, angelo!');
});

test('e2e(events): `getLogMessage` should return correct message, when event is reaction', t => {
    // arrange
    const reactionEvent: ReactionEvent = {
        eventType: EventType.Reaction,
        userId: 'orion',
        reactionEmojiCode: ':eggplant:',
        messageTimestamp: '1234567890',
    };

    // act
    const actual = getLogMessage(reactionEvent);

    // assert
    t.is(actual, 'this is an emoji: :eggplant:');
});

test('e2e(events): `getLogMessage` should let us know when event is not supported', t => {
    // arrange
    const uhOh: Event = {
        eventType: EventType.MessageDeleted,
    };

    // act
    const actual = getLogMessage(uhOh);

    // assert
    t.is(actual, 'Unsupported event type: message_removed');
});
