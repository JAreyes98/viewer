import React, { useState, useEffect } from 'react';

import {PdfService} from "./service/PdfService";
import DocumentViewer from "./components/document/DocumentViewer";
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};


const App = () => {

  const response = new PdfService().getPetsAsPdf()
  return <DocumentViewer resp={response} name={'Usuarios'}/>
}

export default App;
