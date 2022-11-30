const request = require("supertest");
const app = require("../app");

let cookie;
let bearerToken;
let token;
let userId;

// post users
describe("POST /users", () => {
    it("should create a new user", async () => {
        const res = await request(app)
            .post("/users")
            .send({
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@outlook.com",
                password: "123456"
            })
            .expect(201);
    });
});

// login users
describe("POST /users/login", () => {
    it("should login user", async () => {
        const res = await request(app)
            .post("/users/login")
            .send({
                email: "john.doe@outlook.com",
                password: "123456"
            })
            .expect(200);
        cookie = res.headers["set-cookie"];
        // token = cookie without the "token=" part (cookie.split("=")[1]) and without the "; HttpOnly" part (cookie.split("=")[1].split(";")[0])
        token = cookie[0].split(";")[0];
        bearerToken = "Bearer " + cookie[0].split("=")[1].split(";")[0];
    });
});

// get users
describe("GET /users", () => {
    it("should get all users", async () => {
        const res = await request(app)
            .get("/users")
            .set("Authorization", `Bearer ${token}`)
            .set("Cookie", token)
            .expect(200);
    });
});

// put users
// describe("PUT /users", () => {
//     test("should update user", async () => {
//         const res = await request(app)
//             .put("/users/2")
//             .set("Authorization", `Bearer ${token}`)
//             .set("Cookie", token)
//             .send({
//                 firstName: "Joh1",
//                 lastName: "Doe1",
//                 email: "john.doe@outlook.com",
//             })
//             .expect(200);
//     });
// });

// delete users
// describe("DELETE /users", () => {
//     test("should delete user", async () => {
//         const res = await request(app)
//             .delete("/users/2")
//             .set("Authorization", `Bearer ${token}`)
//             .set("Cookie", token)
//             .expect(200);
//     });
// });