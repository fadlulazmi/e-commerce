const chaiHttp = require('chai-http')
const chai = require('chai')
const app = require('../app')

chai.use(chaiHttp)
const expect = chai.expect
let prodId;

describe('Products', function(){
    describe('ROUTE /products', function(){
        describe('Success Case', function(){
            it('POST, adding new product, should send status code 201', function(done){
                chai
                    .request(app)
                    .post('/products')
                    .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTFkNzQ0MzA2NzAzMzkzZGM3NTZkMiIsInVzZXJuYW1lIjoiZmFkbHVsIiwiZW1haWwiOiJmYWRsdWxAbWFpbC5jb20iLCJpYXQiOjE1NjE0NTI5NDAsImV4cCI6MTU2MTUzOTM0MH0.3OBHFMHWntxOxqJ-j6zHbhrECfgYV2xK7t6bwUvgWHk')
                    .send({ itemName : 'sepatu', stock : '10', price : '10000', img : 'https://www.jakartanotebook.com/images/products/100/63/25943/2/sepatu-olahraga-kasual-size-35-black-45.jpg'})
                    .then(function(result){
                        prodId = result.body._id
                        expect(result).to.have.status(201)
                        expect(result.body).to.be.an('Object')
                        expect(result.body).to.have.property('_id')
                        done()
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            it('GET all products, should send status code 200', function(done){
                chai
                    .request(app)
                    .get('/products')
                    .then(function(result){
                        expect(result).to.have.status(200)
                        expect(result.body).to.be.an('Array')
                        done()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            it('GET detail products, should send status code 200', function(done){
                chai
                    .request(app)
                    .get(`/products/${prodId}`)
                    .then(function(result){
                        expect(result).to.have.status(200)
                        expect(result.body).to.be.an('Object')
                        done()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            it('PUT all products, should send status code 200', function(done){
                chai
                    .request(app)
                    .put(`/products/${prodId}`)
                    .set('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTFkNzQ0MzA2NzAzMzkzZGM3NTZkMiIsInVzZXJuYW1lIjoiZmFkbHVsIiwiZW1haWwiOiJmYWRsdWxAbWFpbC5jb20iLCJpYXQiOjE1NjE0NTI5NDAsImV4cCI6MTU2MTUzOTM0MH0.3OBHFMHWntxOxqJ-j6zHbhrECfgYV2xK7t6bwUvgWHk')
                    .send({stock : '10'})
                    .then(function(result){
                        expect(result).to.have.status(200)
                        expect(result.body).to.be.an('Object')
                        done()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            it('DELETE a products, should send status code 200', function(done){
                chai
                    .request(app)
                    .delete(`/products/${prodId}`)
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