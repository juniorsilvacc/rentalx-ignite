/* eslint-disable @typescript-eslint/no-unused-vars */
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayJsProvider implements IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number {
    const end_data_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);

    return dayjs(end_data_utc).diff(start_date_utc, "hours");
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  dateNow(): Date {
    return dayjs().toDate();
  }
}

export { DayJsProvider };
