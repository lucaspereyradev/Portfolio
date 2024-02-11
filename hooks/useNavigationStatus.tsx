'use client'
import { useState } from 'react'

const useNavigationStatus = () => {
    const [navigationStatus, setNavigationStatus] = useState<boolean>(false)

    const toggleNavigationStatus = () => setNavigationStatus(!navigationStatus)

    return { navigationStatus, toggleNavigationStatus }
}

export default useNavigationStatus
