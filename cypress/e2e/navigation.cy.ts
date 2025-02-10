describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the hero section correctly", () => {
    // Check Japanese title appears and animates
    cy.get("div").contains("わくわくを、世界へ。").should("be.visible");

    // Check main heading appears
    cy.get("div").contains("Expand your reach in").should("be.visible");
    cy.get("div").contains("Asia and Europe.").should("be.visible");

    // Check Japanese description
    cy.get("p").contains("SEAN諸国、欧州に拠点を持ち、").should("be.visible");
  });

  it("should show desktop navigation on large screens", () => {
    cy.viewport(1280, 800);

    cy.get("div.hidden.xl\\:block").should("be.visible");
    cy.get('nav a[href="/#about"]').should("be.visible");
    cy.get('nav a[href="/#services"]').should("be.visible");
    cy.get("div.block.xl\\:hidden").should("not.be.visible");
  });

  it("should show mobile navigation on small screens", () => {
    cy.viewport(375, 812);

    cy.get("div.block.xl\\:hidden").should("be.visible");
    cy.get("div.hidden.xl\\:block").should("not.be.visible");

    // Test mobile navigation
    cy.get(".hamburger-react").should("be.visible").click();
    cy.get('div[class*="bg-white/80"]').should("be.visible");
  });
});
