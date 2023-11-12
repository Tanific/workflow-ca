import { logout } from "./logout";
import { remove } from "../../storage";

jest.mock("../../storage/index.js", () => {
  return {
    remove: jest.fn(),
  };
});

describe("logout function", () => {
  it("clears the token from browser storage", () => {
    logout();
    expect(remove).toHaveBeenCalledWith("token");
  });
});
