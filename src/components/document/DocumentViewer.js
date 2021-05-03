import React, { useState, useEffect } from 'react';
import FileSaver from 'file-saver'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import arrow from '../../images/chevron.svg'
import print from '../../images/print.svg'
import './DocumentViewer.css';
import {FileConverter} from "../../utils/FileConverter";

const DocumentViewer = (props) => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        FileConverter.to64BasedToBlob(props.resp, (blob) => {
            const file = new File([blob], `${props.name}.pdf`)
            setFile(file);
        });

    }, [])

    function onFileChange(event) {
        console.log(event.target.files[0])
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    const options = {
        cMapUrl: 'cmaps/',
        cMapPacked: true,
    };

    const printReport = () => {
        FileConverter.to64BasedToBlob(props.resp, (blob) => {
            FileSaver.saveAs(blob, `${props.name}.pdf`)
        });
    }

    return (
            <div className="viewer">
                <div className="viewer-panel">
                    <ul className="panel-item-list">
                        <li className="item first"><img src={arrow} alt="Set first"/></li>
                        <li className="item prev"><img src={arrow} alt="Set previus"/></li>
                        <li className="item next"><img src={arrow} alt="Set next"/></li>
                        <li className="item last"><img src={arrow} alt="Set last"/></li>
                        <li className="item" onClick={printReport} ><img src={print} alt="Set last"/></li>
                    </ul>
                </div>
                <div className="Example__container__document">
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={options}>
                        {
                            Array.from(
                                new Array(numPages),
                                (el, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}/>
                                ),
                            )
                        }
                    </Document>
                </div>
            </div>
    );
}

export default DocumentViewer;