var chai  = require("chai");
var chaiHttp = require("chai-http");
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe("/GET por nome usuário", function() {
  it("pesquisar usuário por nome", function(done) {
    chai.request(server)
      .get('/user/by-name?value=re')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(1);
        done();
      });
  });

});

describe("/GET por titulo livro", function() {
  it("pesquisar livro por titulo", function(done) {
    chai.request(server)
      .get('/book/by-title?value=l')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(3);
        done();
      });
  });
});

describe("/GET por autor livro", function() {
  it("pesquisar livro por autor", function(done) {
    chai.request(server)
      .get('/book/by-author?value=a')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(3);
        done();
      });
  });
});

describe("/GET por nome usuário inexistente", function() {
  it("pesquisar usuário por nome que não existe", function(done) {
    chai.request(server)
      .get('/user/by-name?value=jdadsadso')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('name').contains('não encontrou resultados');
        done();
      });
  });
});

describe("/GET por nome titulo inexistente", function() {
  it("pesquisar livro por título que não existe", function(done) {
    chai.request(server)
      .get('/book/by-title?value=jdadsadso')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('title').contains('não encontrou resultados');
        done();
      });
  });
});

describe("/GET por nome autor inexistente", function() {
  it("pesquisar livro por autor que não existe", function(done) {
    chai.request(server)
      .get('/book/by-author?value=jdadsadso')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('author').contains('não encontrou resultados');
        done();
      });
  });
});


describe("/GET por caminho inválido", function() {
  it("pesquisar caminho inválido", function() {
    chai.request(server)
      .get('/user/byauto?value=a')
      .end(function(err, res){
        res.should.have.status(400);
        done();
      });
  });
});
