/**
 * Formats a date object in a "yyyy-MM-dd" format
 * Ex: 2000-01-30
 * @param date
 * @returns Formatted date string, if date is undefined, formatShortDateString returns an empty string
 */
export const formatShortDateString = (date) => {
    if (!date)
        return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};
/**
 * Formats a date object in a "LLL d, y K:mm a" format
 * Ex: Jun 30, 2024 8:00 PM
 * @param date
 * @returns Formatted date string, if date is undefined, formatShortDateString returns an empty string
 */
export const formatLongDateTimeString = (date, includeTime) => {
    if (!date)
        return "";
    const dateString = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    if (includeTime) {
        const timeString = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
        return `${dateString} ${timeString}`;
    }
    else
        return dateString;
};
/**
 *
 * @param date
 * @returns
 */
export const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date.getTime());
};
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
export const zonedTimeToUtc = (date, timeZone) => {
    const utc = newDateUTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()).getTime();
    const offsetMilliseconds = tzParseTimezone(timeZone, new Date(utc));
    return new Date(utc + offsetMilliseconds);
};
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
export const utcToZonedTime = (date, timeZone) => {
    const offsetMilliseconds = tzParseTimezone(timeZone, date, true);
    const d = new Date(date.getTime() - offsetMilliseconds);
    const resultDate = new Date(0);
    resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
    return resultDate;
};
// Helper functions for utcToZonedTime
const patterns = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
};
const validIANATimezoneCache = {};
const MILLISECONDS_IN_HOUR = 3600000;
const MILLISECONDS_IN_MINUTE = 60000;
const isValidTimezoneIANAString = (timeZoneString) => {
    if (validIANATimezoneCache[timeZoneString])
        return true;
    try {
        new Intl.DateTimeFormat(undefined, { timeZone: timeZoneString });
        validIANATimezoneCache[timeZoneString] = true;
        return true;
    }
    catch (error) {
        return false;
    }
};
export const tzParseTimezone = (timezoneString, date, isUtcDate) => {
    // Empty string
    if (!timezoneString) {
        return 0;
    }
    // Z
    let token = patterns.timezoneZ.exec(timezoneString);
    if (token) {
        return 0;
    }
    let hours;
    let absoluteOffset;
    // ±hh
    token = patterns.timezoneHH.exec(timezoneString);
    if (token) {
        hours = parseInt(token[1], 10);
        if (!validateTimezone(hours)) {
            return NaN;
        }
        return -(hours * MILLISECONDS_IN_HOUR);
    }
    // ±hh:mm or ±hhmm
    token = patterns.timezoneHHMM.exec(timezoneString);
    if (token) {
        hours = parseInt(token[2], 10);
        const minutes = parseInt(token[3], 10);
        if (!validateTimezone(hours, minutes)) {
            return NaN;
        }
        absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
        return token[1] === "+" ? -absoluteOffset : absoluteOffset;
    }
    const fixOffset = (date, offset, timezoneString) => {
        const localTS = date.getTime();
        // Our UTC time is just a guess because our offset is just a guess
        let utcGuess = localTS - offset;
        // Test whether the zone matches the offset for this ts
        const o2 = calcOffset(new Date(utcGuess), timezoneString);
        // If so, offset didn't change, and we're done
        if (offset === o2) {
            return offset;
        }
        // If not, change the ts by the difference in the offset
        utcGuess -= o2 - offset;
        // If that gives us the local time we want, we're done
        const o3 = calcOffset(new Date(utcGuess), timezoneString);
        if (o2 === o3) {
            return o2;
        }
        // If it's different, we're in a hole time. The offset has changed, but we don't adjust the time
        return Math.max(o2, o3);
    };
    // IANA time zone
    if (isValidTimezoneIANAString(timezoneString)) {
        date = new Date(date || Date.now());
        const utcDate = isUtcDate ? date : toUtcDate(date);
        const offset = calcOffset(utcDate, timezoneString);
        const fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
        return -fixedOffset;
    }
    return NaN;
};
const validateTimezone = (hours, minutes) => {
    return -23 <= hours && hours <= 23 && (minutes == null || (0 <= minutes && minutes <= 59));
};
const calcOffset = (date, timezoneString) => {
    const tokens = tzTokenizeDate(date, timezoneString);
    // ms dropped because it's not provided by tzTokenizeDate
    const asUTC = newDateUTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5], 0).getTime();
    let asTS = date.getTime();
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return asUTC - asTS;
};
const toUtcDate = (date) => {
    return newDateUTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};
const newDateUTC = (fullYear, month, day, hour, minute, second, millisecond) => {
    const utcDate = new Date(0);
    utcDate.setUTCFullYear(fullYear, month, day);
    utcDate.setUTCHours(hour, minute, second, millisecond);
    return utcDate;
};
const tzTokenizeDate = (date, timeZone) => {
    const dtf = getDateTimeFormat(timeZone);
    return "formatToParts" in dtf ? partsOffset(dtf, date) : hackyOffset(dtf, date);
};
const dtfCache = {};
const getDateTimeFormat = (timeZone) => {
    if (!dtfCache[timeZone]) {
        // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
        const testDateFormatted = new Intl.DateTimeFormat("en-US", {
            hourCycle: "h23",
            timeZone: "America/New_York",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).format(new Date("2014-06-25T04:00:00.123Z"));
        const hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
        dtfCache[timeZone] = hourCycleSupported
            ? new Intl.DateTimeFormat("en-US", {
                hourCycle: "h23",
                timeZone: timeZone,
                year: "numeric",
                month: "numeric",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })
            : new Intl.DateTimeFormat("en-US", {
                hour12: false,
                timeZone: timeZone,
                year: "numeric",
                month: "numeric",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
    }
    return dtfCache[timeZone];
};
const typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5,
};
const partsOffset = (dtf, date) => {
    try {
        const formatted = dtf.formatToParts(date);
        const filled = [];
        for (let i = 0; i < formatted.length; i++) {
            const pos = typeToPos[formatted[i].type];
            if (pos !== undefined) {
                filled[pos] = parseInt(formatted[i].value, 10);
            }
        }
        return filled;
    }
    catch (error) {
        if (error instanceof RangeError) {
            return [NaN];
        }
        throw error;
    }
};
const hackyOffset = (dtf, date) => {
    const formatted = dtf.format(date);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
    // const [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
    // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
    return [
        parseInt(parsed[3], 10),
        parseInt(parsed[1], 10),
        parseInt(parsed[2], 10),
        parseInt(parsed[4], 10),
        parseInt(parsed[5], 10),
        parseInt(parsed[6], 10),
    ];
};
/**
 * Regex to validate time format
 * @example
 *    timeFormatRegex.test("12:00 AM") => true
 *    timeFormatRegex.test("12:00 PM") => true
 *    timeFormatRegex.test("12:00") => false
 */
export const timeFormatRegex = new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/);
/**
 * Copies the time from one date to another
 * @param to
 * @param input
 */
export const copyTime = (to, input) => {
    to.setHours(input.getHours());
    to.setMinutes(input.getMinutes());
    to.setSeconds(input.getSeconds());
    to.setMilliseconds(input.getMilliseconds());
};
/**
 * Gets the date time object from a date
 * @param dateTime
 * @returns
 */
export const getDateTimeObjectFromDate = (dateTime) => {
    return {
        month: dateTime.getMonth(),
        year: dateTime.getFullYear(),
        day: dateTime.getDay(),
        hour: dateTime.getHours() > 12 ? (dateTime.getHours() - 12).toString() : dateTime.getHours().toString(),
        minute: dateTime.getMinutes().toString().padStart(2, "0"),
        ampm: dateTime.getHours() >= 12 ? "PM" : "AM",
    };
};
/**
 * Gets the date from a date time object
 * @param dateTime
 * @returns
 */
export const getDateFromDateTimeObject = (dateTime) => {
    const date = new Date();
    date.setMonth(dateTime.month);
    date.setFullYear(dateTime.year);
    date.setDate(dateTime.day);
    date.setHours(dateTime.ampm === "PM" ? parseInt(dateTime.hour) + 12 : parseInt(dateTime.hour));
    date.setMinutes(parseInt(dateTime.minute));
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
};
export const formatDate = (date, includeTime) => {
    // Extract year, month, and day
    const year = date.getFullYear();
    // Months are zero-indexed in JavaScript, so add 1 and pad with leading zero if necessary
    const month = String(date.getMonth() + 1).padStart(2, "0");
    // Get the day of the month and pad with leading zero if necessary
    const day = String(date.getDate()).padStart(2, "0");
    // Extract hours in 24-hour format
    let hours = date.getHours();
    // Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set to 12
    // Pad hours with leading zero if necessary
    const hoursStr = String(hours).padStart(2, "0");
    // Extract minutes and pad with leading zero if necessary
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // Construct the formatted date string
    const formattedDate = includeTime ? `${year}-${month}-${day} ${hoursStr}:${minutes} ${ampm}` : `${year}-${month}-${day}`;
    return formattedDate;
};
/**
 * Gets the time string from a date time object
 * @param dateTime
 * @returns
 */
export const getTimeString = (dateTime) => {
    if (parseInt(dateTime.hour, 10) === 0) {
        return `12:${dateTime.minute.padStart(2, "0")} AM`;
    }
    return `${dateTime.hour}:${dateTime.minute.padStart(2, "0")} ${dateTime.ampm}`;
};
//# sourceMappingURL=dateTimeUtils.js.map