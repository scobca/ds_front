import axios from "axios";
import apiConf from "@/api/api.conf";

export class ExcelModel {
    async getUserFromExcel(formData: FormData) {
        return new Promise((resolve, reject) => {
            axios.post(`${apiConf.endpoint}/api/getUser`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(async (res) => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
