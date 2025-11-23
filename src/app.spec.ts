import { describe, it, expect } from "vitest";
import app from "./app";
import request from "supertest";

describe("GET /", () => {
  it("should return a greeting message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toContain("Hello, World!");
  });
});
