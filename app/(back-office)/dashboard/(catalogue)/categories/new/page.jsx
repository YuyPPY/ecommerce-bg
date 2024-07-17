"use client"
import FormHeader from '@/components/backend/form/FormHeader'
import SubmitButton from '@/components/backend/Forminputs/SubmitButton'
import TextareaInput from '@/components/backend/Forminputs/TextAreainput'
import TextInput from '@/components/backend/Forminputs/Textinput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import generateSlug from "@/lib/generateSlug";
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/backend/Forminputs/Imageinput'
export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("")
  const [loading,setLoading] = useState("false")
  const { register, handleSubmit, formState: { errors } } = useForm()
  async function onSubmit(data) {
    {/* 
        -id
        -title
        -description
        -image
        -slug
        -stock
        -price
    */}
        
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data)
  }
  return (
    <div>
      <FormHeader title="New Categroy" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='categoryImageUploader'
            label="Category Image"
          />
        </div>
        <SubmitButton
          isLoading={loading}

          buttonTitle="Create Category"
          loadingButtonTitle="Creating Category please wait..."
        />
      </form>
    </div>
  )
}
