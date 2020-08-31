export function formDataToJSON (formData: FormData): object {
    return [...formData.entries()].reduce((acc, input) => ({
        ...acc,
        [input[0]]: input[1]
    }), {})
}
