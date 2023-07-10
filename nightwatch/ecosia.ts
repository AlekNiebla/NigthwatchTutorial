describe('Ecosia.org Demo', function() {
  this.tags = ['demo'];

  before(browser => browser.navigateTo('https://www.ecosia.org/'));

  it('Demo test ecosia.org', function(browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.attributeEquals('[data-test-id=\'search-form-input\']', 'value', 'nightwatch');
  });

  after(browser => browser.end());
});

//.layout__content