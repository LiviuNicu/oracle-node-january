const { ExpectationFailed } = require("http-errors");
const { testEnvironment } = require("../jest.config");

const userModel = require("../models/userModel").User;
const userModelFunctions = require("../models/userModel");
const mongoose = require("mongoose");

test("test", () => {
  expect(true).toBe(true);
});

describe("User model test", () => {
  beforeAll(async () => {
    await mongoose.connect(
      "mongodb+srv://demo:demo@cluster0.nvhvm.mongodb.net/jest?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      (err) => {
        if (err) {
          console.log(err);
          process.exit(1);
        }
      }
    );
  });

  test("user is inserted successfully into the database", async () => {
    const user = {
      email: "test_" + new Date().getTime() + "@test.com",
      firstName: "test",
      lastName: "test",
      hashed_password: "addjkaklsjlK",
    };

    const validUser = new userModel(user);
    const insertedUser = await validUser.save();

    expect(insertedUser._id).toBeDefined();
    expect(insertedUser.dateAdded).toBeDefined();
    expect(insertedUser.firstName).toBe(user.firstName);
    expect(insertedUser.lastName).toBe(user.lastName);
    expect(insertedUser.email).toBe(user.email);
    expect(insertedUser.hashed_password).toBe(user.hashed_password);
  });

  test("is email required into the database?", async () => {
    const user = {
      email: "",
      firstName: "test",
      lastName: "test",
      hashed_password: "addjkaklsjlK",
    };

    const invalidUser = new userModel(user);
    let err;

    try {
      await invalidUser.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  test("is register function work as expected?", async () => {
    const user = {
      email: "test_" + new Date().getTime() + "@test.com",
      firstName: "test",
      lastName: "test",
      password: "addjkaklsjlK",
    };
    const insertedUser = await userModelFunctions.register(user);

    expect(insertedUser.success).toBe("User Inserted");
    expect(insertedUser.user._id).toBeDefined();
    expect(insertedUser.user.dateAdded).toBeDefined();
    expect(insertedUser.user.email).toBe(user.email);
    expect(insertedUser.user.firstName).toBe(user.firstName);
    expect(insertedUser.user.lastName).toBe(user.lastName);
    expect(insertedUser.user.hashed_password).toBeDefined();
  });

  test("is login function work as expected?", async () => {
    const user = {
      email: "test_" + new Date().getTime() + "@test.com",
      firstName: "test",
      lastName: "test",
      password: "addjkaklsjlK",
    };
    await userModelFunctions.register(user);

    const loginResponse = await userModelFunctions.login({
      email: user.email,
      password: user.password,
    });

    expect(loginResponse.token).toBeDefined();
  });

  test("is get all users function work as expected?", async () => {
    const initialLength = await userModelFunctions.getAllUsers();
    const user = {
      email: "test_" + new Date().getTime() + "@test.com",
      firstName: "test",
      lastName: "test",
      password: "addjkaklsjlK",
    };
    await userModelFunctions.register(user);

    const afterTheRegistrationLength = await userModelFunctions.getAllUsers();

    expect(afterTheRegistrationLength.length).toBe(initialLength.length + 1);
  });

  test("is get by id function work as expected?", async () => {
    const user = {
      email: "test_" + new Date().getTime() + "@test.com",
      firstName: "test",
      lastName: "test",
      password: "addjkaklsjlK",
    };
    const insertedUser = await userModelFunctions.register(user);
    expect(insertedUser.user._id).toBeDefined();
    expect(insertedUser.user.hashed_password).toBeDefined();

    const dbUser = await userModelFunctions.getUserById(insertedUser.user._id);
    expect(dbUser.email).toBe(insertedUser.user.email);
    expect(dbUser.firstName).toBe(insertedUser.user.firstName);
    expect(dbUser.lastName).toBe(insertedUser.user.lastName);
  });
});
