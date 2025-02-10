describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
  });
});

describe("Hero Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display main hero elements", () => {
    // Japanese title
    cy.contains("わくわくを、世界へ。").should("be.visible");

    // Main headings
    cy.contains("Expand your reach in").should("be.visible");
    cy.contains("Asia and Europe.").should("be.visible");

    // Japanese description
    cy.contains("SEAN諸国、欧州に拠点を持ち、").should("be.visible");
  });

  it("should display icons correctly based on viewport", () => {
    // Desktop view
    cy.viewport(1920, 1080);
    cy.get(".hidden.md\\:block").should("be.visible");
    cy.get(".block.md\\:hidden").should("not.be.visible");

    // Mobile view
    cy.viewport(375, 812);
    cy.get(".hidden.md\\:block").should("not.be.visible");
    cy.get(".block.md\\:hidden").should("be.visible");
  });

  it("should display information banner", () => {
    cy.get(".bg-white.border.border-black.rounded-full")
      .should("be.visible")
      .contains("information");
  });
});
