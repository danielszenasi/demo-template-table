import { Ng2TemplateTablePage } from './app.po';

describe('ng2-template-table App', function() {
  let page: Ng2TemplateTablePage;

  beforeEach(() => {
    page = new Ng2TemplateTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
