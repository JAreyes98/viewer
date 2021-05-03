
// import FileSaver from 'file-saver'
export class FileFactory {

    static fileBuilder(resp, name,  type){
        fetch(`data:application/${type};base64,` + resp.data)
            .then(function(resp) {return resp.blob()})
            .then(function(blob) {
                // FileSaver.saveAs(blob, `${name}.${type}`)
                return blob;
            });
    }

}