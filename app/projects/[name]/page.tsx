import React from 'react'
import ProjectDetails from '@/components/Projects/ProjectDetails'

const ProjectDetailPage = ({ params }: { params: { name: string } }) => {
    const { name } = params
    return <ProjectDetails projectName={name} />
}

export default ProjectDetailPage
