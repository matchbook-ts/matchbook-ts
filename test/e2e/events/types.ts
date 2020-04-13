export enum EventType {
    Message = 'message_posted',
    MessageDeleted = 'message_removed',
    Reaction = 'reaction_added',
}

export interface Event {
    eventType: EventType;
}

export interface MessageEvent extends Event {
    eventType: EventType.Message;

    messageBody: string;
    userId: string;
    channel: string;
}

export interface ReactionEvent extends Event {
    eventType: EventType.Reaction;

    reactionEmojiCode: string;
    userId: string;
    messageTimestamp: string;
}

export function isMessage(event: Event): event is MessageEvent {
    return event.eventType === EventType.Message;
}

export function isReaction(event: Event): event is ReactionEvent {
    return event.eventType === EventType.Reaction;
}
