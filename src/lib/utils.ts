/**
 *
 * @param ms delay in milliseconds (default is 1000 milliseconds)
 * @returns
 */
export const delay = (ms: number = 1000) =>
    new Promise((resolve) => setTimeout(resolve, ms))

export const getErrorMessage = (error: unknown) => {
    return error instanceof Error ? error.message : 'An unknown error occurred.'
}
