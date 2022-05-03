
import supertest from 'supertest'
import app from '../src/app.js'


const agent = supertest(app);

describe('cardServices.ts testing', () => {

    it('teste', async() => {
        console.log('oi');
        expect('oi').toBe('oi')
    })


})