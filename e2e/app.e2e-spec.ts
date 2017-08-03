import { ClilocalPage } from './app.po';

describe('clilocal App', () => {
  let page: ClilocalPage;

  beforeEach(() => {
    page = new ClilocalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
