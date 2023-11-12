const invalidEmail = "fake@stud.noroff.no";
const invalidPassword = "invalidpassword";

describe("Invalid login attempt", () => {
  it("should show an error message for invalid login", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(500);
    cy.get("#registerModal").should("be.visible").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(invalidEmail);
    cy.get("#loginPassword").type(invalidPassword);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
    cy.get("button[type=submit]").contains("Login").click();
    cy.url().should("not.include", "?view=profile&name=");
    cy.get("#loginEmail")
      .invoke("attr", "title")
      .should("equal", "Only Noroff student or teacher emails are valid.");
  });
});
