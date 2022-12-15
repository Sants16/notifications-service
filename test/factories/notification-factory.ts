import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Override = Partial<NotificationProps>

export function makeNotifications(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('Nova mensagem'),
        recipientId: 'example-id',
        ...override
    })
}