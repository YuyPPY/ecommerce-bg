"use client"
import FormHeader from '@/components/backend/form/FormHeader'
import SubmitButton from '@/components/backend/Forminputs/SubmitButton'
import TextareaInput from '@/components/backend/Forminputs/TextAreainput'
import TextInput from '@/components/backend/Forminputs/Textinput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import generateSlug from "@/lib/generateSlug";
import { generateSlug } from '@/lib/generateSlug'
import { makePostRequest } from '@/lib/apiRequest'
import ImageInput from '@/components/backend/Forminputs/Imageinput'
import SelectInput from '@/components/backend/Forminputs/SelectInput'
import ToggleInput from '@/components/backend/Forminputs/Toggleinput'
export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("")
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
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      isActive: true,
    }
  });
  const isActive = watch('isActive')
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
    data.status = ''
    console.log(data)
    makePostRequest(
      setLoading,
      'api/categories',
      data,
      "Category",
      reset
    );
    setImageUrl("")
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
            className='w-full'
          />
          <SelectInput
            label="Select Market"
            name="marketIds"
            register={register}
            errors={errors}
            className='w-full'
            options={markets}
            multiple={false}
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
          <ToggleInput
            label="Publish your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
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
