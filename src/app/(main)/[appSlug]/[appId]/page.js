import React from 'react'
import AppViewer from '../../_components/AppViewer'

export default function AppPage({params}) {

  const { appSlug, appId } = params;
  return (
    <div>
      <AppViewer appId={appId} />
    </div>
  )
}
