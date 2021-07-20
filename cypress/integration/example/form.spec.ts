describe("フォームのテスト", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("メールアドレスを入力", () => {
    cy.get(".email").type("example@example.com");
  });

  it("パスワードを入力", () => {
    cy.get(".password").type("123456");
  });

  it("送信ボタンを押す", () => {
    cy.get(".email").type("example@example.com");
    cy.get(".password").type("123456");
    cy.get(".submit").click();
  });
});
