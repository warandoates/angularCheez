import { ChezCheezPage } from './app.po';

describe('chez-cheez App', () => {
  let page: ChezCheezPage;

  beforeEach(() => {
    page = new ChezCheezPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
