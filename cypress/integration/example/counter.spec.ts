describe("カウンターアプリのテスト", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("+ボタンを押すとカウンターの値に1プラスされる", () => {
    cy.get(".increment").click().get(".counter").should("have.text", "1");
  });

  it("-ボタンを押すとカウンターの値が1マイナスされる", () => {
    cy.get(".decrement").click().get(".counter").should("have.text", "-1");
  });

  it("+ボタンを押した後、リセットボタンを押すとカウントが0に戻る", () => {
    cy.get(".increment")
      .click()
      .get(".reset")
      .click()
      .get(".counter")
      .should("have.text", "0");
  });
});
