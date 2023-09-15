import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Preview from './components/Preview'
import { Document, Page, pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function App() {
  const [formData, setFormData] = useState(
    {
      BasicInfo:{
        fname:"",
        lname:"",
        ptitle:"",
        summary:"",
      }
      ,
      ContactInfo:{
        email:"",
        phoneNo:"",
        location:"",
        website:"",
      }
      ,
      TechnicalInfo:[],
      EducationInfo:[],
      WorkInfo:[],
    }
  );
  const cvPageRef = useRef();
  const [numPages, setNumPages] = React.useState(null);


  const [showCVPage, setShowCVPage] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleToggle=()=>{

    setShowCVPage((prevShowCVPage) => !prevShowCVPage);

  }
 
  const printPreview = () => {
    window.history.pushState({}, document.title, window.location.pathname);
    window.print();
  };

 

  return (
    <div className='container'>

      <Editor formData = {formData} setFormData = {setFormData}/>
      <Preview formData = {formData} showCVPage={showCVPage} cvPageRef={cvPageRef} />

      <div className="buttonContainer">
        <button  className="togglePreviewbtn no-print" onClick={handleToggle}><i class="fa fa-eye"></i></button>
        <button className="printbtn no-print"   onClick={printPreview}><i class="fa fa-print"></i></button>
      </div>

      
     
    </div>
  )
}

export default App
