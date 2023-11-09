const validEmail = "testemailcypress@stud.noroff.no";
const validPassword = "testpassword";
const expectedProfileUrl = "http://127.0.0.1:8080/?view=profile&name=cytest";

describe("valid login", () => {
  it("allows user to view profile", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(500);
    cy.get("#registerModal").should("be.visible").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(validEmail);
    cy.get("#loginPassword").type(validPassword);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    cy.url().should("eq", expectedProfileUrl);
  });
});
