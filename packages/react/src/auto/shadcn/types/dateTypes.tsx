/**
 * Match a day falling after the specified date, with the date not included.
 *
 * @example
 *   // Match days after the 2nd of February 2019
 *   const matcher: DateAfter = { after: new Date(2019, 1, 2) };
 */
export type DateAfter = {
  after: Date;
};
/**
 * Match a day falling before the specified date, with the date not included.
 *
 * @example
 *   // Match days before the 2nd of February 2019
 *   const matcher: DateBefore = { before: new Date(2019, 1, 2) };
 */
export type DateBefore = {
  before: Date;
};

export type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

/**
 * An interval of dates. Differently from {@link DateRange}, the range ends here
 * are not included.
 *
 * @example
 *   // Match the days between the 2nd and the 5th of February 2019
 *   const matcher: DateInterval = {
 *     after: new Date(2019, 1, 2),
 *     before: new Date(2019, 1, 5)
 *   };
 */
export type DateInterval = {
  before: Date;
  after: Date;
};

/**
 * Match dates being one of the specified days of the week (`0-6`, where `0` is
 * Sunday).
 *
 * @example
 *   // Match Sundays
 *   const matcher: DayOfWeek = { dayOfWeek: 0 };
 *   // Match weekends
 *   const matcher: DayOfWeek = { dayOfWeek: [0, 6] };
 */
export type DayOfWeek = {
  dayOfWeek: number | number[];
};

export type Matcher = boolean | ((date: Date) => boolean) | Date | Date[] | DateRange | DateBefore | DateAfter | DateInterval | DayOfWeek;

/**
 * Represents the modifiers that match a specific day in the calendar.
 *
 * - Retrieve modifiers using the {@link OnSelectHandler} via the `onSelect` prop,
 *   or within custom components using the {@link useDayPicker} hook.
 * - Includes built-in modifiers from {@link DayFlag} and {@link SelectionState}.
 * - Add custom modifiers using the `modifiers` prop.
 *
 * @example
 *   const modifiers: Modifiers = {
 *   today: false, // the day is not today
 *   selected: true, // the day is selected
 *   disabled: false, // the day is not disabled
 *   outside: false, // the day is not outside the month
 *   focused: false, // the day is not focused
 *
 *   weekend: false // custom modifier example for matching a weekend
 *   booked: true // custom modifier example for matching a booked day
 *   available: false // custom modifier example for matching an available day
 *   };
 *
 * @see https://daypicker.dev/guides/custom-modifiers
 */
export type Modifiers = Record<string, boolean>;

/**
 * Shared handler type for `onSelect` callback when a selection mode is set.
 *
 * @template T - The type of the selected item.
 * @callback OnSelectHandler
 * @param {T} selected - The selected item after the event.
 * @param {Date} triggerDate - The date when the event was triggered.
 * @param {Modifiers} modifiers - The modifiers associated with the event.
 * @param {React.MouseEvent | React.KeyboardEvent} e - The event object.
 */
export type OnSelectHandler<T> = (selected: T, triggerDate: Date, modifiers: Modifiers, e: React.MouseEvent | React.KeyboardEvent) => void;
/**
 * The props when the single selection is required.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#single-mode
 */
export interface PropsSingleRequired {
  mode: "single";
  required: true;
  /** The selected date. */
  selected: Date | undefined;
  /** Event handler when a day is selected. */
  onSelect?: OnSelectHandler<Date>;
}
/**
 * The props when the single selection is optional.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#single-mode
 */
export interface PropsSingle {
  mode: "single";
  required?: false | undefined;
  /** The selected date. */
  selected?: Date | undefined;
  /** Event handler when a day is selected. */
  onSelect?: OnSelectHandler<Date | undefined>;
}
/**
 * The props when the multiple selection is required.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#multiple-mode
 */
export interface PropsMultiRequired {
  mode: "multiple";
  required: true;
  /** The selected dates. */
  selected: Date[] | undefined;
  /** Event handler when days are selected. */
  onSelect?: OnSelectHandler<Date[]>;
  /** The minimum number of selectable days. */
  min?: number;
  /** The maximum number of selectable days. */
  max?: number;
}
/**
 * The props when the multiple selection is optional.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#multiple-mode
 */
export interface PropsMulti {
  mode: "multiple";
  required?: false | undefined;
  /** The selected dates. */
  selected?: Date[] | undefined;
  /** Event handler when days are selected. */
  onSelect?: OnSelectHandler<Date[] | undefined>;
  /** The minimum number of selectable days. */
  min?: number;
  /** The maximum number of selectable days. */
  max?: number;
}
/**
 * The props when the range selection is required.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#range-mode
 */
export interface PropsRangeRequired {
  mode: "range";
  required: true;
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * When `true`, the range will reset when including a disabled day.
   *
   * @since V9.0.2
   */
  excludeDisabled?: boolean | undefined;
  /** The selected range. */
  selected: DateRange | undefined;
  /** Event handler when a range is selected. */
  onSelect?: OnSelectHandler<DateRange>;
  /** The minimum number of days to include in the range. */
  min?: number;
  /** The maximum number of days to include in the range. */
  max?: number;
}
/**
 * The props when the range selection is optional.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#range-mode
 */
export interface PropsRange {
  mode: "range";
  required?: false | undefined;
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * When `true`, the range will reset when including a disabled day.
   *
   * @since V9.0.2
   */
  excludeDisabled?: boolean | undefined;
  /** The selected range. */
  selected?: DateRange | undefined;
  /** Event handler when the selection changes. */
  onSelect?: OnSelectHandler<DateRange | undefined>;
  /** The minimum number of days to include in the range. */
  min?: number;
  /** The maximum number of days to include in the range. */
  max?: number;
}

export type PropsBase = {
  defaultMonth?: Date;
  autoFocus?: boolean;
  classNames?: { [key: string]: string };
};

export type DayPickerProps = PropsBase &
  (
    | PropsSingle
    | PropsSingleRequired
    | PropsMulti
    | PropsMultiRequired
    | PropsRange
    | PropsRangeRequired
    | {
        mode?: undefined;
        required?: undefined;
      }
  );
