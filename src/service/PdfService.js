import {BaseService} from "./BaseService";
import {ErrorFactory} from "../utils/ErrorFactory";

export class PdfService extends BaseService{

    // getPets = () => {
    //     return this.doGet('').then(resp => {
    //         if (resp instanceof Response && resp.status !== 200) {
    //             throw ErrorFactory.buildError(resp);
    //         }
    //         return resp.json()
    //     })
    // }

    getPetsAsPdf = () => {
        return this.doGet('admin/users/report').then(resp => {
            if (resp instanceof Response && resp.status !== 200) {
                throw ErrorFactory.buildError(resp);
            }
            return resp.json()
        })
    }
}