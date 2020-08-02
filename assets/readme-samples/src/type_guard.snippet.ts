import { match, _ } from '@matchbook/ts';
//             ^^^ `_` is an alias for `otherwise`

enum EventType { Message, ... }
interface Event { ... }
interface MessageEvent extends Event { ... }

function isMessage(e: Event): e is MessageEvent {
//                            ^^^^^^^^^^^^^^^^^
//          the 'is' keyword tells typescript that
//          if `isMessage` returns `true`,
//          then `e` is of type `MessageEvent`.
    return e.type === EventType.Message;
}

const handleEvent: (e: Event) => string = pattern(
    match(isMessage, 'you got a message!'),
    _('Event type not supported')
);

assert(handleEvent(message) === 'you got a message!');
