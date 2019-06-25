const chaiHttp = require('chai-http')
const chai = require('chai')
const app = require('../app')

chai.use(chaiHttp)
const expect = chai.expect
let ID;

describe('User', function(){
    describe('ROUTE /register', function(){
        describe('Success Case', function(){
            it('success, should send status code 201', function(done){
                chai
                 .request(app)
                 .post('/user/register')
                 .send({ username : 'fadlulazmi', email : 'fadlulazmi@mail.com', password : '1234', role : 'admin'})
                 .then(result => {
                  // console.log(result)
                    ID = result.body._id
                    expect(result).to.have.status(201)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('_id')
                    expect(result.body).to.have.property('username')
                    expect(result.body).to.have.property('email')
                    expect(result.body).to.have.property('password')
                    expect(result.body).to.have.property('role')
                    expect(result.body.username).to.equal('fadlulazmi')
                    expect(result.body.email).to.equal('fadlulazmi@mail.com')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
        })
        describe('Error Case', function(){
            it('duplicate email, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/register')
                 .send({ username : 'fadlul', email : 'fadlul@mail.com', password : '1234', role : 'admin'})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')

                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('invalid email format, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/register')
                 .send({ username : 'lala', email : 'lalamail.com', password : '1234', role : 'admin'})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('meet minimum password length, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/register')
                 .send({ username : 'lala', email : 'lala@mail.com', password : '123', role : 'admin'})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('username contain space, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/register')
                 .send({ username : 'la la', email : 'lala@mail.com', password : '1234', role : 'admin'})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('empty username field, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/register')
                 .send({ username : '', email : 'lala@mail.com', password : '1234', role : 'admin'})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('username contain special character, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/register')
                 .send({ username : '^%$$^%)*^%', email : 'lala@mail.com', password : '1234', role : 'admin'})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('empty email field, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/register')
                 .send({ username : 'lala', email : '', password : '1234', role : 'admin'})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('empty password field, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/register')
                 .send({ username : 'lala', email : 'lala@mail.com', password : '', role : 'admin'})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
        })
    }) 
    describe('ROUTE /login', function(){
        describe('Success Case', function(){
            it('success, should send status code 200', function(done){
                chai
                 .request(app)
                 .post('/user/login')
                 .send({ email : 'fadlulazmi@mail.com', password : '1234'})
                 .then(result => {
                    expect(result).to.have.status(200)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('access_token')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
        })
        describe('Error Case', function(){
            it('empty email field, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/login')
                 .send({email : '', password : '1234'})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('empty password field, should send status code 400', function(done){
                chai
                 .request(app)
                 .post('/user/login')
                 .send({email : 'fadlul@mail.com', password : ''})
                 .then(result => {
    
                    expect(result).to.have.status(400)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('wrong email, should send status code 404', function(done){
                chai
                 .request(app)
                 .post('/user/login')
                 .send({email : 'adlul@mail.com', password : '1234'})
                 .then(result => {
    
                    expect(result).to.have.status(404)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
            it('wrong password, should send status code 404', function(done){
                chai
                 .request(app)
                 .post('/user/login')
                 .send({email : 'fadlul@mail.com', password : '12345'})
                 .then(result => {
    
                    expect(result).to.have.status(404)
                    expect(result.body).to.be.an('Object')
                    expect(result.body).to.have.property('message')
                    done()
                 })
                 .catch(err => {
                    console.log(err)
                 })
            })
        })
    })
})
