import IMailTempleteProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTempleteProvider {
  public async parse(): Promise<string> {
    return 'Mail Content';
  }
}

export default FakeMailTemplateProvider;
