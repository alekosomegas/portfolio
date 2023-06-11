
export function toCurrency(number, withoutCents) {
    if (isNaN(number)) return
    return number.toLocaleString(undefined, { 
        style: 'currency', 
        currency: 'EUR',
        minimumFractionDigits: withoutCents ? 0 : 2,
        maximumFractionDigits: withoutCents ? 0 : 2,
    })
}

export function changeSingleStateValue(setter, name, value) {
    setter(prev => {
        return {
            ...prev,
            [name]: value
        }
    })
}
