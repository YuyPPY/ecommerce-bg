"use client"
import FormHeader from '@/components/backend/form/FormHeader'
import SubmitButton from '@/components/backend/Forminputs/SubmitButton'
import TextInput from '@/components/backend/Forminputs/Textinput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import generateSlug from "@/lib/generateSlug";
import { makePostRequest } from '@/lib/apiRequest'
import { generateCouponCode, } from '@/lib/generateCouponCode'
export default function NewCoupons() {
  // const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  // const [couponCode, setcouponCode] = useState()


  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm()

  async function onSubmit(data) {
    {/* 
        -id => auto()
        -title
        -expiryData
        -code => auto()
    */}
    const couponCode = generateCouponCode(data.title, data.expiryDate)
    data.couponCode = couponCode;
    console.log(data);
    makePostRequest(setLoading,"api/coupons",data,"Coupon",reset

    )

  }
  return (
    <div>
      <FormHeader title="New Coupons" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
          />
          {/* <TextInput
            label="Coupon Code"
            name="counponCode"
            register={register}
            errors={errors}
            className=' w-full'
          /> */}
          <TextInput
            label="Coupon Expiry Date"
            name="expiryDate"
            type='date'
            register={register}
            errors={errors}
            className=' w-full'
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Coupon"
          loadingButtonTitle="Creating Coupon please wait..."
        />
      </form>
    </div>
  )
}
