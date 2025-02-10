describe("Cookie Consent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.clearCookies();
  });

  it("should show cookie consent banner on first visit", () => {
    cy.contains("This website uses cookies to enhance user experience").should(
      "be.visible"
    );
    cy.contains("このウェブサイトでは").should("be.visible");
    cy.contains("Agree").should("be.visible");
    cy.contains("同意する").should("be.visible");
  });

  it("should hide banner and persist cookie after accepting", () => {
    // Accept cookies and verify banner disappears
    cy.get("button").contains("Agree").click();
    cy.contains("This website uses cookies").should("not.exist");

    // Refresh page and verify banner stays hidden
    cy.reload();
    cy.contains("This website uses cookies").should("not.exist");
  });

  it("should hide cookie consent after accepting", () => {
    cy.contains("This website uses cookies").should("be.visible");
    cy.get("button").contains("Agree").click();
    cy.contains("This website uses cookies").should("not.exist");

    // Verify cookie was set correctly
    cy.getCookie("cookie-consent").should("have.property", "value", "true");
  });

  it("should hide cookie consent when clicking close button", () => {
    cy.contains("This website uses cookies").should("be.visible");
    cy.get('button[class*="text-gray-400"]').first().click();
    cy.contains("This website uses cookies").should("not.exist");
  });

  it("should not show banner on subsequent visits after accepting", () => {
    // Set cookie manually
    cy.setCookie("cookie-consent", "true");

    // Reload page
    cy.reload();

    // Banner should not be visible
    cy.contains("This website uses cookies").should("not.exist");
  });
});
