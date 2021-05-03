export class FileConverter {
    static  to64BasedToBlob(resp, run) {
        resp.then(resp => {
            fetch(`data:application/pdf;base64,` + resp.data)
                .then(function(resp) {return resp.blob()})
                .then(function(blob) {
                    run(blob);
                });
        }).catch(err => {
            if (err instanceof Promise) {
                err.then(e => alert(e.message))
            }else {
                console.log(err);
            }
        })
    }
}