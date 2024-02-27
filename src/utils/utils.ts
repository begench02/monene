export const convertToRuble = (num: number): string => {
    let num_str = num.toString()
    let ruble = ''
    let space_counter = 0
    for (let i = num_str.length - 1; i >= 0; i--) {
        if (space_counter === 3) {
            ruble = ' ' + ruble
        }
        space_counter++
        ruble = num_str[i] + ruble
    }

    return ruble + ' ₽'
}
