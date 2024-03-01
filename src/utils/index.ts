export const convertToRuble = (num: number): string => {
    let num_str = num.toString()
    let ruble = ''
    let space_counter = 0
    for (let i = num_str.length - 1; i >= 0; i--) {
        if (space_counter === 3) {
            ruble = ' ' + ruble
            space_counter = 0
        }
        space_counter++
        ruble = num_str[i] + ruble
    }

    return ruble + ' ₽'
}

export const regex = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
} as const