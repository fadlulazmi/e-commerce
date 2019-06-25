const chaiHttp = require('chai-http')
const chai = require('chai')
const app = require('../app')

chai.use(chaiHttp)
const expect = chai.expect
let cartId;

describe('Carts', function(){
    describe('ROUTE /carts', function(){
        describe('Success Case', function(){
            it('POST, adding new cart, should send status code 201', function(done){
                chai
                    .request(app)
                    .post('/carts')
                    .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTFkNzQ0MzA2NzAzMzkzZGM3NTZkMiIsInVzZXJuYW1lIjoiZmFkbHVsIiwiZW1haWwiOiJmYWRsdWxAbWFpbC5jb20iLCJpYXQiOjE1NjE0NTI5NDAsImV4cCI6MTU2MTUzOTM0MH0.3OBHFMHWntxOxqJ-j6zHbhrECfgYV2xK7t6bwUvgWHk')
                    .send({ productId : '5d11cfe1c1076630a0fed0e3', delivStatus : false })
                    .then(function(result){
                        cartId = result.body._id
                        expect(result).to.have.status(201)
                        expect(result.body).to.be.an('Object')
                        expect(result.body).to.have.property('_id')
                        expect(result.body).to.have.property('userId')
                        expect(result.body).to.have.property('productId')
                        expect(result.body).to.have.property('delivStatus')
                        done()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            it('GET, all carts, should send status code 201', function(done){
                chai
                    .request(app)
                    .get('/carts/5d11cfe1c1076630a0fed0e3')
                    .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTFkNzQ0MzA2NzAzMzkzZGM3NTZkMiIsInVzZXJuYW1lIjoiZmFkbHVsIiwiZW1haWwiOiJmYWRsdWxAbWFpbC5jb20iLCJpYXQiOjE1NjE0NTI5NDAsImV4cCI6MTU2MTUzOTM0MH0.3OBHFMHWntxOxqJ-j6zHbhrECfgYV2xK7t6bwUvgWHk')
                    .then(function(result){
                        expect(result).to.have.status(200)
                        expect(result.body).to.be.an('Array')
                        done()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            it('DELETE a cart, should send status code 201', function(done){
                chai
                    .request(app)
                    .delete(`/carts/${cartId}`)
                    .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTFkNzQ0MzA2NzAzMzkzZGM3NTZkMiIsInVzZXJuYW1lIjoiZmFkbHVsIiwiZW1haWwiOiJmYWRsdWxAbWFpbC5jb20iLCJpYXQiOjE1NjE0NTI5NDAsImV4cCI6MTU2MTUzOTM0MH0.3OBHFMHWntxOxqJ-j6zHbhrECfgYV2xK7t6bwUvgWHk')
                    .then(function(result){
                        expect(result).to.have.status(200)
                        expect(result.body).to.be.an('Object')
                        done()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        })
    })
})