var chai  = require("chai");
var chaiHttp = require("chai-http");
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe("/GET por nome usuário", function() {
  it("pesquisar usuário por nome", function() {
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
  it("pesquisar livro por titulo", function() {
    chai.request(server)
      .get('/book/by-title?value=t')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(3);
        done();
      });
  });
});

describe("/GET por autor livro", function() {
  it("pesquisar livro por autor", function() {
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
