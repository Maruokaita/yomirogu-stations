describe('Email Validation', () => {
  beforeEach(() => {
    // テスト対象のページを開くなどの前準備があればここで行う
    cy.visit('http://localhost:3000/');
  })
  context('should validate email input when valid', () => {

    // テスト用のデータ
    const validEmail = 'valid@example.com';
    it('valid check', () => {
      // 正しい形式のメールアドレスを入力し、エラーが表示されないことを確認
      cy.get('input[type="email"]').type(validEmail);
      cy.get('button[type="submit"]').click();
      cy.get('[data-cy="error-message"]').should('not.exist');
    })
    
  });
  context('should validate email input when invalid', () => {

    // テスト用のデータ
    const invalidEmail = 'invalid-email@com';
    it('invalid chack', () => {
      // 不正な形式のメールアドレスを入力し、エラーが表示されることを確認
      cy.get('input[type="email"]').clear().type(invalidEmail);
      cy.get('.submit').click();
      cy.log('Clicked submit button');
      cy.wait(1000);
      cy.log('Waited for 1000ms');
      cy.get('.error-message').should('exist');
    })
  });
});