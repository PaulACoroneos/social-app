import React from 'react'

export const Desktop = (_props: React.PropsWithChildren<{}>) => null
export const TabletOrDesktop = (_props: React.PropsWithChildren<{}>) => null
export const Tablet = (_props: React.PropsWithChildren<{}>) => null
export const TabletOrMobile = ({children}: React.PropsWithChildren<{}>) => (
  <>{children}</>
)
export const Mobile = ({children}: React.PropsWithChildren<{}>) => (
  <>{children}</>
)
