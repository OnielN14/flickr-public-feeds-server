import supertest from 'supertest'
import app from '../../app'
import { PublicPhotoFeed } from 'flickr-sdk'
import initRedis from '../../cache/redis'

const testID = 'test-id'

jest.mock('../../cache/redis')
jest.mock('uuid', () => ({
  v4: () => testID
}))
jest.mock('flickr-sdk', () => {
  class Feeds {
    publicPhotos(args: any) {
      return new Promise((resolve) => {
        resolve({
          body: {
            items: [
              {'message': 'This is testing message'}
            ]
          } as unknown as PublicPhotoFeed
        })
      })
    }
  }

  return { Feeds }
})

beforeAll(() => {
  initRedis()  
})

describe('Feeds Controller Test', () => {
  describe('GET /feed', () => {
    it('Should retrieve new feeds', (done) => {
      supertest(app)
        .get('/api/feed')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) done(err)
          expect(res.body).toMatchObject({
            id: testID,
            result: {
              data: [{'message': 'This is testing message'}],
              page: 1,
              perPage: 10,
              total: 1,
              totalPage: 1
            }
          })

          done()
        })
    })
  })
})