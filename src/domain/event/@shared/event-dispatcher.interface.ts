import { IEvent } from "./event.interface";
import { IEventHandler } from "./event-handler.interface";

export interface IEventDispatcher {
    notify(event: IEvent): void;
    register(eventName: string, eventHandler: IEventHandler): void;
    unregister(eventName: string, eventHandler: IEventHandler): void;
    unregisterAll(): void;
}