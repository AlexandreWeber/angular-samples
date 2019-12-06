import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}zipCode`) as Promise<any>;
  }

  async setZipCode(zipCode: string) {
    await browser.sleep(3000);
    await element(by.name('zipCode')).sendKeys(zipCode);
  }
}
