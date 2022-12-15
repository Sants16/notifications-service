import { makeNotifications } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { CountRecipientNotifications } from "./count-recipient-notifications"

describe('Count recipient notifications', () => {
    it('should be able to count a recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository)
 
        await notificationsRepository.create(makeNotifications({ recipientId: 'fake-id' }))

        await notificationsRepository.create(makeNotifications({ recipientId: 'fake-id' }))

        await notificationsRepository.create(makeNotifications({ recipientId: 'example-id' }))

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'fake-id'
        })

        expect(count).toEqual(2)
    })
})