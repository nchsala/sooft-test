export class HttpError extends Error {
    status: number = 500
    message: string = ""
    name: string = ""
}

export class NotFoundError extends HttpError{
    attribute: string
    status: number
    constructor(attribute: string) {
        super(attribute)
        this.message = `${attribute} wasn't found`
        this.name = "NotFound"
        this.attribute = attribute
        this.status = 404
    }
    toJSON() {
        const errors: any = {}
        let attribute = this.attribute
        errors[attribute] = this.message
        let json = {
            name: this.name,
            message: this.message,
            status: this.status,
            errors
        }
        return json
    }
}

export class DuplicateKeyError extends HttpError{
    attribute: string
    status: number
    constructor(attribute: string) {
        super(attribute)
        this.message = `There is already a record with the same ${attribute}`
        this.name = "DuplicateKeyError"
        this.attribute = attribute
        this.status = 400
    }
    toJSON() {
        let json = {
            name: this.name,
            message: this.message,
            status: this.status
        }
        return json
    }
}

export function isHttpError(error: any): error is HttpError {
    console.log( typeof error )
    return error instanceof HttpError
}