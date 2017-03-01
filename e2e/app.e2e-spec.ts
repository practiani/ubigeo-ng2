import { UbigeoNg2Page } from './app.po';

describe('ubigeo-ng2 App', function() {
  let page: UbigeoNg2Page;

  beforeEach(() => {
    page = new UbigeoNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
