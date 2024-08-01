/**
 * Formats a date to a string in the format "DD Month YYYY"
 *
 * @param {Date} date The date to format
 * @returns {string} The formatted date
 */
export function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    // Add ordinal suffix to the day
    const day = formattedDate.split(" ")[0];
    const ordinalSuffix = getOrdinalSuffix(Number(day));
    const formattedDay = day + ordinalSuffix;

    return formattedDate.replace(day, formattedDay);
}

/**
 * Function to get the ordinal suffix for a given day
 *
 * @param {number} day The day to get the ordinal suffix for
 * @returns {string} The ordinal suffix for the given day
 */
function getOrdinalSuffix(day: number) {
    if (day >= 11 && day <= 13) {
        return "th";
    }
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
