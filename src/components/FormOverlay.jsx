import React from 'react'
import "../css/FormOverlay.css"
function FormOverlay({isEnable}) {
  return (
    <div className={`form-overlay-container ${isEnable?`active`:``}`}>
	    <div className="spinner">
		    <div></div>
		    <div></div>
		    <div></div>
		    <div></div>
		    <div></div>
		    <div></div>
		    <div></div>
		    <div></div>
		    <div></div>
		    <div></div>
		    <div></div>
		    <div></div>
        </div>
    </div>
  )
}

export default FormOverlay