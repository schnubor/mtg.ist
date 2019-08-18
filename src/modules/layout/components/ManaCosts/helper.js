export const formatManaCosts = (manaCost) => {
    let formatted

    formatted = isNaN(manaCost) ? manaCost.toLowerCase().replace('/', '') : manaCost
    formatted = formatted === 't' ? 'tap' : formatted

    return formatted
}
