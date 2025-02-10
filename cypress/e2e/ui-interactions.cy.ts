describe("UI Interactions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should animate typing text", () => {
    // Check initial state
    cy.get(".text-center")
      .contains("わくわくを、世界へ。")
      .should("be.visible");

    // Wait for typing animation to complete
    cy.wait(2000);

    // Check if subsequent elements appear
    cy.get("div")
      .contains("Expand your reach in")
      .should("have.css", "opacity", "1");
  });

  it("should show correct icons based on viewport", () => {
    // Desktop view
    cy.viewport(1920, 1080);
    cy.get(".hidden.md\\:block").should("be.visible");
    cy.get(".block.md\\:hidden").should("not.be.visible");

    // Mobile view
    cy.viewport(375, 812);
    cy.get(".hidden.md\\:block").should("not.be.visible");
    cy.get(".block.md\\:hidden").should("be.visible");
  });

  it("should have working infinite scroll on mobile", () => {
    cy.visit("http://localhost:3000/non-existent-page", {
      failOnStatusCode: false,
    });
    cy.viewport(375, 812);
    cy.get(".flex.animate-infinite-scroll").should("be.visible");
  });
});
