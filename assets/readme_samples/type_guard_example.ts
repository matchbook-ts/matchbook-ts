/* istanbul ignore file */

import * as assert from 'assert';
import { match, pattern, _ } from '../../src';

declare let message: MessageEvent;

interface Event { /* ... */ }
interface MessageEvent extends Event { /* ... */ }

declare function isMessage(e: Event): e is MessageEvent;

export const handleEvent: Fn<(e: Event) => string> = pattern(
    match(isMessage, 'you got a message!'),
    _('Event type not supported')
);

assert(handleEvent(message) === 'you got a message!');