export class ErrorFactory {

    static buildError(err) {

        if ((err instanceof Error) && err.message.includes('NetworkError'))
            return new Error('Ha ocurrido un error al tratar de conectarse con el servidor')

        if (err instanceof Response && err.status === 500)
            return new Error('Se ha denegado el acceso')

        if (err instanceof Response) {
            return err.json().then(resp => {
                return new Error(resp.message)
            });
        }

        return new Error('Defecto');
    }

}