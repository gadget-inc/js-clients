import type { DateTimeState } from "./auto/polaris/inputs/PolarisAutoTimePicker.js";
/**
 * Formats a date object in a "yyyy-MM-dd" format
 * Ex: 2000-01-30
 * @param date
 * @returns Formatted date string, if date is undefined, formatShortDateString returns an empty string
 */
export declare const formatShortDateString: (date: Date) => string;
/**
 * Formats a date object in a "LLL d, y K:mm a" format
 * Ex: Jun 30, 2024 8:00 PM
 * @param date
 * @returns Formatted date string, if date is undefined, formatShortDateString returns an empty string
 */
export declare const formatLongDateTimeString: (date: Date, includeTime: boolean) => string;
/**
 *
 * @param date
 * @returns
 */
export declare const isValidDate: (date: unknown) => boolean;
/**
 * @name zonedTimeToUtc
 * (called "toZonedTime" in the original date-fns-tz repo)
 * @category Time Zone Helpers
 * @summary Get the UTC date/time from a date representing local time in a given time zone
 * @author https://github.com/marnusw
 * Taken from https://github.com/marnusw/date-fns-tz
 *
 * @description
 * Returns a date instance with the UTC time of the provided date of which the values
 * represented the local time in the time zone specified. In other words, if the input
 * date represented local time in time zone, the timestamp of the output date will
 * give the equivalent UTC of that local time regardless of the current system time zone.
 *
 * @param date the date with values representing the local time
 * @param timeZone the time zone of this local time, can be an offset or IANA time zone
 * @param options the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am in Los Angeles is 5pm UTC
 * const result = fromZonedTime(new Date(2014, 5, 25, 10, 0, 0), 'America/Los_Angeles')
 * //=> 2014-06-25T17:00:00.000Z
 */
export declare const zonedTimeToUtc: (date: Date, timeZone: string) => Date;
/**
 * @name utcToZonedTime
 * (called "toZonedTime" in the original date-fns-tz repo)
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 * @author https://github.com/marnusw
 * Taken from https://github.com/marnusw/date-fns-tz
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param date the date with the relevant UTC time
 * @param timeZone the time zone to get local time for, can be an offset or IANA time zone
 * @param options the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 *
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = toZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
export declare const utcToZonedTime: (date: Date, timeZone: string) => Date;
export declare const tzParseTimezone: (timezoneString: string | undefined, date: Date | number | undefined, isUtcDate?: boolean) => number;
/**
 * Regex to validate time format
 * @example
 *    timeFormatRegex.test("12:00 AM") => true
 *    timeFormatRegex.test("12:00 PM") => true
 *    timeFormatRegex.test("12:00") => false
 */
export declare const timeFormatRegex: RegExp;
/**
 * Copies the time from one date to another
 * @param to
 * @param input
 */
export declare const copyTime: (to: Date, input: Date) => void;
/**
 * Gets the date time object from a date
 * @param dateTime
 * @returns
 */
export declare const getDateTimeObjectFromDate: (dateTime: Date) => {
    month: number;
    year: number;
    day: number;
    hour: string;
    minute: string;
    ampm: string;
};
/**
 * Gets the date from a date time object
 * @param dateTime
 * @returns
 */
export declare const getDateFromDateTimeObject: (dateTime: DateTimeState) => Date;
export declare const formatDate: (date: Date) => string;
/**
 * Gets the time string from a date time object
 * @param dateTime
 * @returns
 */
export declare const getTimeString: (dateTime: DateTimeState) => string;
