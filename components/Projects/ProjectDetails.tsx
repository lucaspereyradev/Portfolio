import React from 'react'
import HeaderDetails from './components/HeaderDetails'

const ProjectDetails = ({ projectName }: { projectName: string }) => {
	console.log(projectName)

    return (
        <>
            <HeaderDetails />
        </>
    )
}

export default ProjectDetails
