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
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginEmail:invalid").should("exist");
    cy.get("#loginPassword:invalid").should("exist");
  });
});
