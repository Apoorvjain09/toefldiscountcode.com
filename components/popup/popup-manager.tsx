'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

const AppDownloadPopup = dynamic(() => import('./AppDownloadPopup'), { ssr: false })
const TargetScorePopup = dynamic(() => import('./TargetScorePopup'), { ssr: false })
const WhatsappCommunityPopup = dynamic(() => import('./WhatsappCommunityPopup'), { ssr: false })

const defaultPopupState = {
    other_modals: false, //sync with other pages
    show_popups: true, // one popup per session
    AppDownload: false,
    TargetScore: null,
    WhatsappCommunity: false,
}

export default function PopupManager() {
    const [popupState, setPopupState] = useState<typeof defaultPopupState>(defaultPopupState)
    const pathname = usePathname()
    const skipPopups = pathname.startsWith('/tests') || pathname.startsWith('/practice-questions') || pathname.startsWith('/vocab')

    useEffect(() => {
        const stored = localStorage.getItem('popup_manager')
        if (stored) {
            const parsed = JSON.parse(stored)
            parsed.show_popups = true
            localStorage.setItem('popup_manager', JSON.stringify(parsed))
            setPopupState(parsed)
        } else {
            localStorage.setItem('popup_manager', JSON.stringify(defaultPopupState))
        }
    }, [])

    const updatePopup = (key: keyof typeof defaultPopupState, value: boolean | number | null) => {
        const updated = { ...popupState, [key]: value, show_popups: false }
        localStorage.setItem('popup_manager', JSON.stringify(updated))
        setPopupState(updated)
    }

    const show_popups = popupState.show_popups
    const showWhatsapp = !popupState.WhatsappCommunity
    const showTargetScore = popupState.WhatsappCommunity && popupState.TargetScore === null
    const showAppDownload = popupState.WhatsappCommunity && popupState.TargetScore !== null && !popupState.AppDownload

    if (skipPopups) return null

    return (
        <>
            {show_popups && (
                <>
                    {showWhatsapp && (
                        <WhatsappCommunityPopup onJoinSuccess={() => updatePopup('WhatsappCommunity', true)} />
                    )}

                    {showTargetScore && (
                        <TargetScorePopup onSubmit={(score) => updatePopup('TargetScore', score)} />
                    )}

                    {showAppDownload && (
                        <AppDownloadPopup />
                    )}
                </>
            )}
        </>
    )
}