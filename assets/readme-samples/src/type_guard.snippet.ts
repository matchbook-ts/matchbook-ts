import { strike, match, _ } from '@matchbook/ts';
//                     ~~~ alias for `otherwise`

enum EventType { Message, ... }
interface Event { ... }
interface MessageEvent extends Event { text: string, ... }

function isMessage(e: Event): e is MessageEvent {
    //                        ~~~~~~~~~~~~~~~~~
    // the 'is' keyword makes this function
    // a Type Guard. See the link above this
    // example for the official docs.
    return e.type === EventType.Message;
}

const handleEvent = (e: Event) => strike(
    e,
    match(isMessage, m => `you got a message! "${m.text}"`),
    _('Event type not supported')
);

assert(handleEvent(message) === 'you got a message!');
