import { makeNotifications } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { GetRecipientNotifications } from "./get-recipient-notifications"

describe('Get recipient notifications', () => {
    it('should be able to get recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository)
 
        await notificationsRepository.create(makeNotifications({ recipientId: 'fake-id' }))

        await notificationsRepository.create(makeNotifications({ recipientId: 'fake-id' }))

        await notificationsRepository.create(makeNotifications({ recipientId: 'example-id' }))

        const { notifications } = await getRecipientNotifications.execute({
            recipientId: 'fake-id'
        })

        expect(notifications).toHaveLength(2)
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'fake-id' }),
            expect.objectContaining({ recipientId: 'fake-id' })
        ]))
    })
})