import { TfgPage } from './app.po';

describe('tfg App', () => {
  let page: TfgPage;

  beforeEach(() => {
    page = new TfgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
