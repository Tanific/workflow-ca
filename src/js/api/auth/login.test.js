import { login } from "./login.js";
import { save } from "../../storage";

jest.mock("../../storage", () => ({
  ...jest.requireActual("../../storage"),
  save: jest.fn(),
}));

describe("login function", () => {
  it("fetches and stores token in browser storage", async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            accessToken: "fakeToken",
            profileData: "fakeProfile",
          }),
      }),
    );

    global.fetch = mockFetch;

    await login("fake@email.com", "fakePassword");

    expect(save).toHaveBeenCalledWith("token", "fakeToken");
  });
});
