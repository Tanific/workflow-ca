const validEmail = "testemailcypress@stud.noroff.no";
const validPassword = "testpassword";

// start logout test by logging in valid user by navigating through register form to login form
describe("logout function", () => {
  it("allows user to log out with the logout button", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(500);
    cy.get("#registerModal").should("be.visible").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(validEmail);
    cy.get("#loginPassword").type(validPassword);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    //check for token stored as a string in local storage
    cy.window().then((window) => {
      const token = window.localStorage.getItem("token");
      expect(token).to.be.a("string");
    });
    //click log out button
    cy.get("button[data-auth=logout]").contains("Logout").click();
    cy.wait(500);
    // then check if token is removed from local storage
    cy.window().then((window) => {
      const tokenLogoutRemoval = window.localStorage.getItem("token");
      expect(tokenLogoutRemoval).to.be.null;
    });
  });
});
