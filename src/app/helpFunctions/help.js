export const currencyFormatter = (data) => {
    if (data === 0) {
        return "-";
    }
    const formatedDecimal = new Intl.NumberFormat("en-US", {minimumFractionDigits: 2}).format(data)
    return `L. ${formatedDecimal}`;
};
export const dateFormatter = (data) => {
    const date = new Date(data);
    const dateFormat = new Intl.DateTimeFormat("es", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    });
    const [
        {value: day},
        ,
        {value: month},
        ,
        {value: year},
    ] = dateFormat.formatToParts(date);


    return `${day}/${month}/${year}`;
};