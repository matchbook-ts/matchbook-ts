enum EventType { Message, ... }
interface Event { ... }
interface MessageEvent extends Event { ... }

// the 'is' keyword in the return type
// tells typescript that if `isMessage` returns
// `true`, then `e` is of type `MessageEvent`.
//                            v v v v v v v v v
function isMessage(e: Event): e is MessageEvent {
    return e.type === EventType.Message;
}

const handleEvent: Fn<(e: Event) => string> = pattern(
    match(isMessage, 'you got a message!'),
    _('Event type not supported')
);

assert(handleEvent(message) === 'you got a message!');