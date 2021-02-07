const defaultFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export function formatDisplayDate(date: Date | string | number | undefined, options: Intl.DateTimeFormatOptions = defaultFormatOptions) {
  return date ? Intl.DateTimeFormat('en-us', options).format(new Date(date)) : '';
}

export function calculateAge(birthdate: Date | string | number | undefined, endDate: Date | string | number = Date.now()) {
    if (!birthdate) {
        return '';
    }

    const age = new Date(+new Date(endDate) - +new Date(birthdate));
    return age.getUTCFullYear() - 1970;
}