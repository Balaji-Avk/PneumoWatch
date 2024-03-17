import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function ImgForm(){
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleUpload=async()=>{
        if(!file){
            console.log('no file selected');
            return;
        }

        const fd=new FormData();
        fd.append('file',file);

        axios.post('http://127.0.0.1:5000/img',fd,{
            onUploadProgress : (progressEvent) => (console.log(progressEvent.progress*100))},
        )
        .then(res=>{
            console.log(res.data.prediction)
            localStorage.setItem("resultVal", res.data.prediction)
            navigate('/predict')
        })
        .catch(err => console.error(err));
        console.log()
    }
    return(
        <div>             
                <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} />   
                <button type = "submit" onClick={handleUpload}>upload</button>   
        </div>
    )
}