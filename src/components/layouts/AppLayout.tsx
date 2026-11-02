import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


type AppLayoutProps{
  children: React.ReactNode;
}


function AppLayout({children}:AppLayoutProps) {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-900" edges={['top', 'left', 'right']}>
      {children}
    </SafeAreaView>
  )
}

export default AppLayout;
