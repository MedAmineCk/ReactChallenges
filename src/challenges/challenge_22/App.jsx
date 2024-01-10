import React from "react"
import "./style.scss"
import TopText from "./components/TopText"

export default function App() {
        
/* Challenge
    
    The file input isn't fully set up yet. Your task is to finish it as follows:
  
    	1. The <input /> element on line 38 below should be modified so that it:
        	- is a required input.
        	- allows the user to choose multiple files to upload at once. 
        	- allows the user to only choose pdf, jpg, jpeg, or png files. 
        	- updates the filesToUpload state whenever it detects an input change, in the way  
			  described in the next requirement. 
          
    	2. When the user chooses files to upload, the filesToUpload state should be updated to be 
		   an array with one object per file that the user selected. Each object should have 3 properties: fileName, fileType, & fileSize, with the corresponding info as their values. For example: {fileName: "example-file.jpeg", fileType: "image/jpeg", fileSize: 8752474}. 
          
    	3. Test your code by clicking the "Choose Files" button and selecting multiple 
	   	   files. When you click the "Upload" button, you should see each object in the filesToUpload state array console logged with the correct info. (The code for this has already been set up.) 
	   
	Note: You may use the files in the test-files folder to test your code (see the README.md file in the folder). 
       
*/

	const [filesToUpload, setFilesToUpload] = React.useState([])
	
	function handleSubmit(e) {
		e.preventDefault()
		filesToUpload.forEach(file => console.log(file))
	}

	function handleInputChange(event){
		const filesData = [...event.target.files].map(file => ({
			fileName: file.name,
			fileType: file.type,
			fileSize: file.size
		}))
		setFilesToUpload(filesData)
	}

	return (
		<div className="challenge_22">
			<form onSubmit={handleSubmit}>
				<TopText />

				<input
					type="file"
					required
					multiple
					accept=".pdf, .jpg, .jpeg, .png"
					onChange={handleInputChange}
				/>

				<button>Upload </button>
			</form>
		</div>
	)
}
