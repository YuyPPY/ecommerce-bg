"use client"
import FormHeader from '@/components/backend/form/FormHeader'
import SubmitButton from '@/components/backend/Forminputs/SubmitButton'
import TextInput from '@/components/backend/Forminputs/Textinput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import generateSlug from "@/lib/generateSlug";
import { generateSlug } from '@/lib/generateSlug'
import { makePostRequest } from '@/lib/apiRequest'
import ImageInput from '@/components/backend/Forminputs/Imageinput'
import ToggleInput from '@/components/backend/Forminputs/Toggleinput'
export default function NewMarkets() {
  const [logoUrl, setLogoUrl] = useState("")
  const markets = [
    {
      id: 1,
      title: "SD Farmers Market"
    },
    {
      id: 2,
      title: "OP Farmers Market"
    }, {
      id: 3,
      title: "IP Farmers Market"
    }, {
      id: 4,
      title: "KO Farmers Market"
    }, {
      id: 5,
      title: "LO Farmers Market"
    }, {
      id: 6,
      title: "PT Farmers Market"
    },
  ]
  const [loading, setLoading] = useState(false)
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
    }
  })
  const isActive = watch("isActive")
  async function onSubmit(data) {
    {/* 
        -id
        -title
        -link
        -image
        
    */}

    const slug = generateSlug(data.title)
    data.slug = slug
    data.logoUrl = logoUrl
    console.log(data)
    makePostRequest(
      setLoading,
      'api/markets',
      data,
      "Markets",
      reset
    );
    setLogoUrl("")
  }
  return (
    <div>
      <FormHeader title="New Markets" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Markets Title"
            name="title"
            register={register}
            errors={errors}
          />

          {/* Configure this enpoint in the core js */}
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint='marketLogoUploader'
            label="Markets Logo"
          />
          <TextInput
            label="Markets Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Markets Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register} />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Markets"
          loadingButtonTitle="Creating Markets please wait..."
        />
      </form>
    </div>
  )
}
