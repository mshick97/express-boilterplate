import { describe, it, expect } from "vitest";
import app from "./app";
import request from "supertest";

describe("App", () => {
  describe('Route: "/"', () => {
    it("should return a greeting message", async () => {
      const response = await request(app).get("/");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toContain("Hello, World!");
    });
  });

  describe("Not Found", () => {
    it("should return 404 for non-existent route", async () => {
      const response = await request(app).get("/foo-bar-non-existent");

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("error", "Not found");
    });
  });
});
