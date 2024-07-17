"use client"
import FormHeader from '@/components/backend/form/FormHeader'
import SubmitButton from '@/components/backend/Forminputs/SubmitButton'
import TextInput from '@/components/backend/Forminputs/Textinput'
import TextareaInput from '@/components/backend/Forminputs/TextAreainput'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import generateSlug from "@/lib/generateSlug";
import { makePostRequest } from '@/lib/apiRequest'
import { generateUserCode, } from '@/lib/generateUserCode'
export default function NewFarmers() {
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
// FarMERS NAME => MUKE JOHN => MJ

    //LFF-MJ-1120
    const code = generateUserCode('LFF',data.name)
    data.code = code;
    console.log(data);
     makePostRequest(setLoading,"api/farmers",data,"Farmer",reset )

  }
  return (
    <div>
      <FormHeader title="New Farmers" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <TextInput
            label="Farmer's Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Farmer's Phone"
            name="phone"
            type='tel'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Farmer's Emaill Address"
            name="email"
            type='email'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Farmer's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Farmer's Contact Person"
            name="contactperson"
            type='tel'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextareaInput
            label="Farmer's  payment Terms"
            name="terms"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired= {false}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Farmers"
          loadingButtonTitle="Creating Faarmer's please wait..."
        />
      </form>
    </div>
  )
}
