// sempre que tiver uma irformação composta como parse na interface, criar uma dtos

import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTempleteProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
