const defaultFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export function getDateFromString(value: string | undefined) {
  if (!value || typeof value !== 'string') {
    return;
  }

  const dateParts = value.match(/(\d{4})-(\d{2})-(\d{2})/)?.slice(1).map(val => parseInt(val, 10)) || [];
  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
}

export function formatDisplayDate(value: Date | string | number | undefined, options: any = defaultFormatOptions) {
  if (!value) {
    return '';
  }
  
  const date = typeof value === 'string' ? getDateFromString(value) : (value instanceof Date ? value : new Date(value));
  return date ? Intl.DateTimeFormat('en-us', options).format(date) : '';
}

export function calculateAge(birthdate: Date | string | number | undefined, endDate: Date | string | number = Date.now()) {
    if (!birthdate) {
        return '';
    }

    const age = new Date(+new Date(endDate) - +new Date(birthdate));
    return age.getUTCFullYear() - 1970;
}