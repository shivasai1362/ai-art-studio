import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react'
import React from 'react'

function SignUpSSOCallback() {
  return (
    <AuthenticateWithRedirectCallback />
  )
}

export default SignUpSSOCallback;