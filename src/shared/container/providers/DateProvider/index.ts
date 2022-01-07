import { container } from "tsyringe";

import { IMailProvider } from "../MailProvider/IMailProvider";
import { EtherealMailProvider } from "../MailProvider/implementations/EtherealMailProvider";
import { IDateProvider } from "./IDateProvider";
import { DayJsDateProvider } from "./implementations/DayJsDateProvider";

container.registerSingleton<IDateProvider>(
  "DayJsDateProvider",

  DayJsDateProvider
);

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",

  new EtherealMailProvider()
);
