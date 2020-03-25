import * as assert from 'assert';
import { match, pattern, _ } from '../../src';

declare let message: MessageEvent;

enum EventType { Message = 'Message',  /* collapse me */ }

interface IncomingEvent { type: EventType;  /* collapse me */ }
interface MessageEvent { type: EventType.Message;  /* collapse me */ }

function isMessage(e: IncomingEvent): e is MessageEvent {
    return e.type === EventType.Message;
}

export const handleEvent: (e: IncomingEvent) => string = pattern(
    match(isMessage, 'you got a message!'),
    _('Event type not supported')
);

assert(handleEvent(message) === 'you got a message!');