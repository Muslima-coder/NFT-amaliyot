import React from 'react'
import Button from './Button'
import { MessageIcon } from '@/icons'
import { useTranslations } from 'next-intl'

const SendEmail = ({showIcon} : {showIcon?:boolean}) => {
  const t = useTranslations("sendEmailContent")

  return (
    <form autoComplete='off' className='w-full relative '>
        <input name='email' required type='email' placeholder={t("placeholder")} className=' py-[19px] pl-[20px] !pr-[191px] w-full bg-white outline-none rounded-[20px] text-black' />
        <Button icon={ showIcon && <MessageIcon/>} iconPosition='left' classList='sm:!absolute sm:w-auto w-full sm:block sm:mt-0 mt-[16px] flex items-center justify-center top-0 right-0 bottom-0 !px-[50px]'>{t("button")}</Button>
    </form>
  )
}

export default SendEmail