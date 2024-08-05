import React from 'react';
import AppViewer from '@/app/(main)/_components/AppViewer';
import gplay from 'google-play-scraper';
export default async function DownloadPage({params}) {
    const { appSlug, appId } = params;
    let app = await gplay.app({ appId: appId });
  
    
  return (
    <div>
        <AppViewer app={app} appId={appId} download="true" />
    </div>
  )
}
