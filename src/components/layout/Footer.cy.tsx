import React from "react";
import { createYield } from "typescript";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("renders the component", () => {
    cy.mount(<Footer />);

    cy.get(".footer")
      .should("be.visible")
      .should("have.class", "footer")
      .contains("© 2023 - All right reserved");
  });

  describe("link", () => {
    it("navigates to the correct url when clicked", () => {
      cy.mount(<Footer />);

      cy.get(".github").then((link) => {
        cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);
      });
    });
  });
});
