import React, {useEffect, useState} from "react"
import { nanoid } from "nanoid"
import savedData from "../savedData"
import add_item from "../images/add-item.svg"

export default function ToDoList() {
	const [listData, setListData] = React.useState(savedData)
	const [newItemInput, setNewItemInput] = React.useState("")
	const [autoCompleteRequested, setAutoCompleteRequested] = React.useState(false)

	function handleCheckBoxChange(event) {
		setListData(prevList => {
			return prevList.map(item => {
				return item.id === event.target.name
					? { ...item, complete: !item.complete }
					: item
			})
		})
	}

	function handleNewItemInputChange(event) {
		setNewItemInput(event.target.value)
	}
    
    const div = document.querySelector(".to-do-list-container")

	React.useEffect(() => {
		if (div) {
			div.scrollTop = div.scrollHeight
		}
	}, [listData])

/**** Most Relevant Code **************************************************************************/

	function handleEnter(event) {
		if (newItemInput.trim()) {
			if (event.key === "Enter") {
				setListData(prevList => {
					const newListItem = {
						text: event.target.value,
						complete: false,
						id: nanoid(),
					}
					return [...prevList, newListItem]
				})
				setNewItemInput("")
			}
		}
	}

	function autoComplete() {
		setAutoCompleteRequested(true)
	}

	React.useEffect(() => {
		if (autoCompleteRequested) {
			let timeOut = setTimeout(() => {
				setAutoCompleteRequested(false)
				setListData(prevData => {
					return prevData.map(item => {
						return !item.complete ? { ...item, complete: true } : item
					})
				})
			}, 2000)
		}
	}, [autoCompleteRequested])


/* Challenge
  
    1. When the text input with the className of "new-item-input" is in focus, the opacity of the 
	   image with the className of "add-item-icon" should be set to 0.2 by adding the "faded" class to the image's className. When it's not the input is not focus, this class should be removed from the image.
       
    2. When the user has added a new item to the to-do list, the text input element should be 
       cleared of text and become empty again.
       
    3. When the user clicks the "AutoComplete" button, the checkboxes should all become checked at 
       the same time that the to-do list items get crossed out. 
       
    4. To complete these tasks, you will need to make a few small changes to the code below these 
       comments. You will also need to make a couple of small additions to this file. You may make these additions wherever you think they should go. If you find yourself changing or adding a lot of code, you're overcomplicating things! 
       
    Note: You should read through the code between line 32 (marked "Most Relevant Code") and these 
    comments. Aspects of this code are relevant to completing these tasks. However, you do not need to make any modifications to this code. You just need to understand it!  
*/

	const [focus, setFocus] = useState(false);
	useEffect(() => {
		setNewItemInput("")
	}, [listData]);


	const currentList = listData.map(item => {
		return (
			<div className="to-do-list-item-container" key={item.id}>
				<label className="checkbox-label">
					<input
						type="checkbox"
						name={item.id}
						onChange={handleCheckBoxChange}
						checked={item.complete}
					/>
					<span className="checkmark"></span>
					<p className={`to-do-list-item-text ${item.complete && "crossed-out"}`}>
						{item.text}
					</p>
				</label>
				<div className="all-progress-bars-container">
					{!item.complete && autoCompleteRequested && (
						<div className="progress-bar-container">
							<div className="progress-bar-content"></div>
						</div>
					)}
				</div>
			</div>
		)
	})

	return (
		<div>
			<div className="to-do-list-container">
				{currentList}
				<label className="new-item-label">
					<img
						src={add_item}
						className={`add-item-icon ${focus && "faded"}`}
					/>
					<input
						className="new-item-input"
						type="text"
						onKeyDown={handleEnter}
						onChange={handleNewItemInputChange}
						onFocus={()=> setFocus(true)}
						onBlur={()=> setFocus(false)}
						value={newItemInput}
					/>
				</label>
			</div>
			<div className="do-it-button-container">
				<button onClick={autoComplete}>AutoComplete</button>
			</div>
		</div>
	)
}
