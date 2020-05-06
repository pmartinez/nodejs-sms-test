"use strict";
require("dotenv").config();
var assert = require("assert");
var request = require("supertest");
var app = require("../src/index");
var port = process.env.port;

var request = request("http://localhost:" + port);

describe("index", function () {
  describe("GET", function () {
    it("Should return json as default data format", function (done) {
      request.get("/").expect("Content-Type", /json/).expect(200, done);
    });
  });
  describe("GET", function () {
    it("Should return message json as default response", function (done) {
      request
        .get("/")
        .expect(200, JSON.stringify({ message: "Este es el index" }))
        .end(done);
    });
  });
});

describe("Send Message", function () {
  describe("POST message using SMS", function () {
    it("Should send a SMS", function (done) {
      const message = {
        message: "Este es un mensaje de prueba a whatsapp",
        phone: "+59898124806",
      };

      request
        .post("/api/sendMessage")
        .send(message)
        .expect("Content-Type", /json/)
        .expect(200, done);
      //.expect(201, JSON.stringify({ message: "Este es el index" }))
    });
  });
  describe("POST message using Whatsapp", function () {
    it("Should send a Whatsapp", function (done) {
      const message = {
        message: "Este es un mensaje de prueba a whatsapp",
        phone: "+59892365878",
      };

      request
        .post("/api/sendMessageWhatsapp")
        .send(message)
        .expect("Content-Type", /json/)
        .expect(200, done);
      //.expect(201, JSON.stringify({ message: "Este es el index" }))
    });
  });
});
