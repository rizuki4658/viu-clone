import React from 'react'

const Login: React.FC<{ mobile?: boolean }> = ({...props}) => {
  if (!props.mobile) {
    return (
      <button
        type="button"
        className="px-6 py-3 text-sm bg-white bg-opacity-30 rounded-full hover:bg-yellow-500 hover:text-black">
        Sign in / Sign Up
      </button>
    )
  }

  return <></>
}

export default Login
